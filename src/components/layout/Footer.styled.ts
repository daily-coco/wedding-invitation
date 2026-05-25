import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.space[3]};
  font-size: 11px;
`;
