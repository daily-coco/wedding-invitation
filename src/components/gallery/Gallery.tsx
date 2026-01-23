import { useMemo, useState } from 'react';

import {
  GalleryCount,
  GalleryGrid,
  GalleryImage,
  GalleryThumbnail,
  GalleryTitle,
  GalleryWrap,
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

  return (
    <GalleryWrap>
      {title && <GalleryTitle>{title}</GalleryTitle>}

      <GalleryCount>총 {images.length}장</GalleryCount>

      <GalleryGrid>
        {images.map((img, idx) => (
          <GalleryThumbnail
            key={img.path}
            onClick={() => setOpenIndex(idx)}
            aria-haspopup='dialog'
            aria-label={`${img.fileBase} 크게 보기`}
          >
            <GalleryImage src={img.src} alt={img.fileBase} loading='lazy' />
            {/* <span className='thumb__cap'>{img.fileBase}</span> */}
          </GalleryThumbnail>
        ))}
      </GalleryGrid>

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
