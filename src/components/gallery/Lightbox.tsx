import { useEffect, useRef, useState } from 'react';
import { type ImgBasic } from '../../types/common';

function getFocusable(container: HTMLElement) {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  return Array.from(container.querySelectorAll<HTMLElement>(selectors));
}

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: ImgBasic[];
  index: number;
  onClose: () => void;
  onChange: (nextIndex: number) => void;
}) {
  const current = images[index];

  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const requestClose = () => setIsClosing(true);

  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  // ✅ body 스타일 이전값은 ref로 저장 (렌더 때 읽지 말기)
  const bodyPrevOverflowRef = useRef<string>('');
  const bodyPrevPaddingRef = useRef<string>('');

  // 1) 라이트박스가 "마운트될 때 1번만" 스크롤 잠금 + 포커스 초기화 + 키보드 제어
  useEffect(() => {
    // 열기 전 포커스 저장 + 초기 포커스(닫기 버튼)
    lastActiveRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    // body 스크롤 잠금(레이아웃 점프 보정 포함)
    bodyPrevOverflowRef.current = document.body.style.overflow;
    bodyPrevPaddingRef.current = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        requestClose();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
        return;
      }

      // 포커스 트랩 : tab / shift+Tab
      if (e.key === 'Tab') {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const items = getFocusable(dialog);
        if (items.length === 0) {
          e.preventDefault();
          return;
        }

        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);

      // body 원복
      document.body.style.overflow = bodyPrevOverflowRef.current;
      document.body.style.paddingRight = bodyPrevPaddingRef.current;

      lastActiveRef.current?.focus?.();
    };
    // ✅ 마운트 1회만 실행 (Lightbox가 떠있는 동안 유지)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length, onClose, onChange]);

  // 2) 이미지 바뀔 때마다 로딩/에러 상태 초기화
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [current.src]);

  // 3) 프리로드: index 변할 때마다 이웃 이미지 미리 로드
  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const prevIndex = (index - 1 + images.length) % images.length;
    [images[nextIndex], images[prevIndex]].forEach((img) => {
      const pre = new Image();
      pre.src = img.src;
    });
  }, [index, images]);

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      className={`lightbox ${isClosing ? 'isClosing' : ''}`}
      role='dialog'
      aria-modal='true'
      aria-label='결혼식 화보 사진 크게 보기'
      onMouseDown={(e) => {
        // 배경 클릭 닫기
        if (e.target === e.currentTarget) requestClose();
      }}
      onTransitionEnd={(e) => {
        if (isClosing && e.target === e.currentTarget) onClose();
      }}
    >
      <div className='lightbox__content'>
        <button
          ref={closeBtnRef}
          className='lightbox__close'
          onClick={requestClose}
          aria-label='닫기'
        >
          ×
        </button>

        <button className='lightbox__nav' onClick={prev} aria-label='이전 화보'>
          ‹
        </button>

        <figure className='lightbox__figure'>
          {/* ✅ 스켈레톤 */}
          {isLoading && (
            <div className='lightbox__skeleton' aria-hidden='true' />
          )}
          {hasError ? (
            <div className='lightbox__error' role='alert'>
              이미지를 불러올 수 없어요.
              <button
                type='button'
                onClick={() => onChange(index)}
                aria-label='다시 시도'
              >
                다시 시도
              </button>
            </div>
          ) : (
            <img
              src={current.src}
              alt={current.fileBase}
              className={`lightbox__img ${isLoading ? 'isLoading' : ''}`}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          )}
          <figcaption>
            {current.fileBase}{' '}
            {current.order !== null ? `(order: ${current.order})` : ''}
          </figcaption>
        </figure>

        <button className='lightbox__nav' onClick={next} aria-label='다음 화보'>
          ›
        </button>
      </div>
    </div>
  );
}

export default Lightbox;
