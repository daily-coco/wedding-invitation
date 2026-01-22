import styled from 'styled-components';
import { Text } from '../text/Text';

export const InvitationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${({ theme }) => theme.sections.invitation};
`;
export const InvitationTitle = styled(Text).attrs({
  as: 'h2',
  variant: 'title.lg',
})``;
export const InvitationContent = styled(Text).attrs({
  as: 'p',
  variant: 'text.md',
})`
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const HostWrap = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${({ theme }) => theme.sections.hosts};
`;

export const FamilyInfo = styled.div``;
export const Parents = styled.strong``;
export const Child = styled.strong`
  display: inline-block;
  margin-left: 4px;
`;
