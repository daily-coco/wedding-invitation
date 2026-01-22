import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  [data-fade-section] > section {
    padding-left: ${({ theme }) => theme.space[8]};
    padding-right: ${({ theme }) => theme.space[8]};
  }
`;
