import styled from 'styled-components';
import { Text } from '../text/Text';

export const MapWrapper = styled.section`
  margin-top: ${({ theme }) => theme.space[20]};
`;
export const MapTitle = styled.h2`
  text-align: center;
`;
export const MapImgWrap = styled.div``;
export const MapImg = styled.img``;
export const VenueAddress = styled.address``;
export const VenueTel = styled.div``;

export const TransportWrap = styled.div`
  margin-top: ${({ theme }) => theme.space[10]};
`;

export const TransportTitle = styled.h2`
  text-align: center;
`;

export const TransportList = styled.ul`
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const TransportItem = styled.li`
  margin-top: ${({ theme }) => theme.space[4]};

  &:first-child {
    margin-top: 0;
  }
`;
export const ItemTitle = styled(Text).attrs({
  as: 'strong',
  variant: 'title.xs',
})`
  display: block;
  margin-top: ${({ theme }) => theme.space[2]};
`;
export const ItemDesc = styled.p``;
