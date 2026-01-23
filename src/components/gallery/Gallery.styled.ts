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

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.2s linear;
`;
