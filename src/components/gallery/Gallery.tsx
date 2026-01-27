import { useEffect, useMemo, useState } from 'react';

import {
  GalleryCount,
  GalleryGrid,
  GalleryImage,
  GalleryThumbnail,
  GalleryTitle,
  GalleryWrap,
  GalleryMoreButton,
} from './Gallery.styled';
import { type ImgBasic } from '../../types/common';

import {
  extractOrder,
  fileBaseFromPath,
  modules,
} from '../../constants/gallery';
import Lightbox from './Lightbox';
import LightboxPortal from './LightboxPortal';

type Props = {
  title?: string;
};

const INITIAL_VISIBLE = 6; // ✅ 처음 보여줄 개수 (원하는 값으로)
const LOAD_MORE_STEP = 6; // ✅ 더보기 클릭당 추가 개수

export default function Gallery({ title }: Props) {
  const images: ImgBasic[] = useMemo(() => {
    return Object.entries(modules)
      .map(([path, src]) => {
        const fileBase = fileBaseFromPath(path);
        const order = extractOrder(fileBase);
        return { path, src, fileBase, order };
      })
      .sort((a, b) => {
        const aHas = a.order !== null;
        const bHas = b.order !== null;

        //숫자 있는 파일을 먼저
        if (aHas && bHas) return (a.order as number) - (b.order as number);
        if (aHas && !bHas) return -1;
        if (aHas && !bHas) return 1;

        // 숫자 없는 경우 파일명 사전순
        return a.fileBase.localeCompare(b.fileBase);
      });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 더보기용 State
  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL_VISIBLE, images.length)
  );

  // ✅ 로딩 완료 여부
  const [loaded, setLoaded] = useState<boolean[]>(() =>
    Array(images.length).fill(false)
  );
  const [fadeInSet, setFadeInSet] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    setLoaded(Array(images.length).fill(false));
    setFadeInSet(new Set());
    setVisibleCount(Math.min(INITIAL_VISIBLE, images.length));
  }, [images.length]);

  const shownImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const handleMore = () => {
    setVisibleCount((prev) => {
      const next = Math.min(prev + LOAD_MORE_STEP, images.length);

      setFadeInSet((old) => {
        const s = new Set(old);
        for (let i = prev; i < next; i++) s.add(i);
        return s;
      });
      return next;
    });
  };

  const markLoaded = (idx: number) => {
    setLoaded((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <GalleryWrap>
      {title && <GalleryTitle>{title}</GalleryTitle>}

      <GalleryCount>총 {images.length}장</GalleryCount>

      <GalleryGrid>
        {shownImages.map((img, idx) => (
          <GalleryThumbnail
            key={img.path}
            onClick={() => setOpenIndex(idx)}
            aria-haspopup='dialog'
            aria-label={`${img.fileBase} 크게 보기`}
          >
            <GalleryImage
              src={img.src}
              alt={img.fileBase}
              loading='lazy'
              onLoad={() => markLoaded(idx)}
              onError={() => markLoaded(idx)}
              $loaded={loaded[idx]}
              $fade={fadeInSet.has(idx)} // ✅ 더보기로 추가된 애들만 true
            />
            {/* <span className='thumb__cap'>{img.fileBase}</span> */}
          </GalleryThumbnail>
        ))}
      </GalleryGrid>
      {hasMore && (
        <GalleryMoreButton type='button' onClick={handleMore}>
          더보기 ({visibleCount} / {images.length})
        </GalleryMoreButton>
      )}

      {openIndex !== null && (
        <LightboxPortal>
          <Lightbox
            images={images}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onChange={(n) => setOpenIndex(n)}
          />
        </LightboxPortal>
      )}
    </GalleryWrap>
  );
}
