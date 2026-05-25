import styled from 'styled-components';

export const GalleryWrap = styled.section`
  margin-top: ${({ theme }) => theme.space[20]};
`;
export const GalleryTitle = styled.h2``;
export const GalleryCount = styled.p``;
export const GalleryGrid = styled.div`
  margin-top: ${({ theme }) => theme.space[2]};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const GalleryThumbnail = styled.button`
  overflow: hidden;
  position: relative;
  padding: 0;
  border-radius: ${({ theme }) => theme.space[3]};
  &:hover img {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img<{ $loaded: boolean; $fade: boolean }>`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.2s linear;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};

  /* ✅ 더보기로 추가된 애들만 스르륵 */
  transition: ${({ $fade }) => ($fade ? 'opacity 250ms ease' : 'none')};
`;

export const GalleryMoreButton = styled.button`
  margin: 16px auto 0;
  display: block;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.35);
    outline-offset: 3px;
  }
`;
