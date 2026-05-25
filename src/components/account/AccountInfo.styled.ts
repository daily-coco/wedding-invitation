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

export const ModalRow = styled.div`
  display: grid;
  gap: 8;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 12px;
`;
export const ModalRowItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8;
`;
export const AccountHolder = styled.div`
  font-weight: 600;
`;
export const AccountBank = styled.div`
  font-size: 12px;
  color: #666;
`;
export const AccountBackNum = styled.button`
  font-size: 14px;
  text-align: left;
`;
export const AccountCopyWrap = styled.div`
  display: flex;
  gap: 8;
`;

export const AccountBankNum = styled.button`
  flex: 1;
  padding: 10px 12px;
  border-radius: 12;
  border: 1px solid #ddd;
  background: #fff;
  font-weight: 600;
`;

export const AccountPay = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px 12px;
  border-radius: 12;
  border: 1px solid #111;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background: #111;
`;
