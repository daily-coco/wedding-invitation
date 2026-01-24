import styled from 'styled-components';
import { Text } from '../text/Text';

export const AccountInfoWrap = styled.section`
  display: grid;
  place-items: center;
`;
export const AccountInfoTitle = styled(Text).attrs({
  as: 'h2',
  variant: 'title.md',
})`
  margin-top: ${({ theme }) => theme.space[10]};
  text-align: center;
`;

export const AccountInfoNotice = styled(Text).attrs({
  as: 'p',
  variant: 'text.sm',
})`
  margin-top: ${({ theme }) => theme.space[3]};
  text-align: center;
`;

export const AccountInfoButton = styled.button`
  margin-top: ${({ theme }) => theme.space[3]};
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #111;
  color: #fff;
  font-weight: 800;
  background: #111;
`;
