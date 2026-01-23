export const modules = import.meta.glob(
  '/src/assets/images/wedding/**/*.{png,jpg,jpeg,svg,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>;

// 확장자 제거
export function stripExt(filename: string) {
  return filename.replace(/\.[^.]+$/, '');
}

// path에서 파일명뽑기
export function fileBaseFromPath(path: string) {
  const base = path.split('/').pop() ?? path;
  return stripExt(base);
}

// 파일명에서 끝 숫자 추출
export function extractOrder(fileBase: string) {
  const m = fileBase.match(/(?:^|[_-])(\d+)$/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}
