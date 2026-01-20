import styled from 'styled-components';
import { Text } from '../text/Text';

export const VisualSection = styled.section<{ $imageUrl: string }>`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Title = styled.h1``;
export const DateText = styled(Text).attrs({
  as: 'span',
  variant: 'text.md',
})`
  display:block;
  margin-top:4px';
`;
export const Content = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
`;
export const Place = styled.span``;
