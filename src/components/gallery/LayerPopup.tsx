import { useEffect, useState } from 'react';
import { type ImgBasic } from '../../types/common';

function LayerPopup({
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

  const requestClose = () => setIsClosing(true);

  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'ArrowLeft') {
        onChange((index - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onChange((index + 1) % images.length);
      }
      // if (e.key === 'ArrowLeft') prev();
      // if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index, images.length, onClose, onChange]);

  // ✅ 이미지 바뀔 때마다 로딩 스켈레톤 다시 ON
  useEffect(() => {
    setIsLoading(true);
  }, [current.src]);

  return (
    <div
      className={`lightbox ${isClosing ? 'isClosing' : ''}`}
      role='dialog'
      aria-modal='true'
      aria-label='Image preview'
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
          className='lightbox__close'
          onClick={requestClose}
          aria-label='Close'
        >
          ×
        </button>

        <button className='lightbox__nav' onClick={prev} aria-label='Previous'>
          ‹
        </button>

        <figure className='lightbox__figure'>
          {/* ✅ 스켈레톤 */}
          {isLoading && (
            <div className='lightbox__skeleton' aria-hidden='true' />
          )}
          <img
            src={current.src}
            alt={current.fileBase}
            className={`lightbox__img ${isLoading ? 'isLoading' : ''}`}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
          <figcaption>
            {current.fileBase}{' '}
            {current.order !== null ? `(order: ${current.order})` : ''}
          </figcaption>
        </figure>

        <button className='lightbox__nav' onClick={next} aria-label='Next'>
          ›
        </button>
      </div>
    </div>
  );
}

export default LayerPopup;
