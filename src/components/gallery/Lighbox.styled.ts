import styled, { css } from 'styled-components';

interface LightboxWrapProps {
  isClosing?: boolean;
}

export const LightboxBody = styled.div`
  position: relative;
  width: min(980px, 100%);
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 12px;
  transform: translateY(0) scale(1);
  transition: transform 180ms ease;
`;

export const LightboxWrap = styled.div<LightboxWrapProps>`
  z-index: ${({ theme }) => theme.zIndex.lightbox};
  isolation: isolate;
  opacity: 1;
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  padding: ${({ theme }) => theme.space[2]};
  background: rgba(0, 0, 0, 0.72);
  transition: opacity 180ms ease;
  ${(props) =>
    props.isClosing &&
    css`
      opacity: 0; // 예: 닫힐 때 투명도 조절

      // 하위 컴포넌트인 LightboxBody의 스타일 변경
      ${LightboxBody} {
        transform: translateY(6px) scale(0.985);
      }
    `}
`;

export const LightBoxClose = styled.button`
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  font-size: 1.5rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
  &.isClosing {
    opacity: 0;
  }
`;

export const LightBoxNav = styled.button`
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 999px;
  font-size: 1.625rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
`;

export const LightBoxFigure = styled.figure`
  overflow: hidden;
  position: relative;
  margin: 0;
  border-radius: 1rem;
  background: #111;
`;

export const LightBoxCaption = styled.figcaption`
  padding: 0.625rem 0.75;
  font-size: 0.875rem;
  color: #ddd;
  background: rgba(0, 0, 0, 0.35);
`;

export const LightBoxImg = styled.img`
  opacity: 1;
  display: block;
  object-fit: contain;
  transition: opacity 160ms ease;
  width: 100%;
  height: min(72vh, 720px);
  &.isLoading {
    opacity: 0;
  }
`;

// common
export const LightBoxSkeleton = styled.div`
  overflow: hidden;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.08);
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.12),
      transparent
    );
    animation: shimmer 900ms infinite;
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
export const LightBoxError = styled.div``;
export const LightBoxErrorMsg = styled.p``;
export const LightBoxReload = styled.button``;
