import { useMemo, useState } from 'react';
import './gallery.css';
import { type ImgBasic } from '../../types/common';
import Lightbox from './Lightbox';

const modules = import.meta.glob(
  '/src/assets/images/wedding/**/*.{png,jpg,jpeg,svg,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>;
console.log(Object.keys(modules));

// 확장자 제거
function stripExt(filename: string) {
  return filename.replace(/\.[^.]+$/, '');
}

// path에서 파일명뽑기
function fileBaseFromPath(path: string) {
  const base = path.split('/').pop() ?? path;
  return stripExt(base);
}

// 파일명에서 끝 숫자 추출
function extractOrder(fileBase: string) {
  const m = fileBase.match(/(?:^|[_-])(\d+)$/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

export default function GalleryStep3() {
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
    <section>
      <h2>STEP 3: Grid + Lightbox</h2>
      <p>총 {images.length}장</p>

      <div className='galleryGrid'>
        {images.map((img, idx) => (
          <button
            key={img.path}
            type='button'
            className='thumb'
            onClick={() => setOpenIndex(idx)}
            aria-haspopup='dialog'
            aria-label={`${img.fileBase} 크게 보기`}
          >
            <img src={img.src} alt={img.fileBase} loading='lazy' />
            <span className='thumb__cap'>{img.fileBase}</span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={(n) => setOpenIndex(n)}
        />
      )}
    </section>
  );
}
