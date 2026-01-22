import styled from 'styled-components';
import { Text } from '../text/Text';

export const CalendarWrapper = styled.section``;
export const CalendarDate = styled.time`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[2]};
  text-align: center;
`;
export const TimeYear = styled.span``;

export const TimeDay = styled.span`
  margin-left: ${({ theme }) => theme.space[1]};
`;
export const TimeInfo = styled.span`
  margin-left: ${({ theme }) => theme.space[1]};
`;

export const CalendarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeader = styled.thead`
  background: #f9f9f9;
`;

export const CalendarBody = styled.div`
  margin-top: ${({ theme }) => theme.space[10]};
`;
export const TableCaption = styled(Text).attrs({
  as: 'caption',
  variant: 'title.sm',
})`
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
export const TableRow = styled.tr``;
export const TableHeaderCell = styled.th`
  padding: 0.5rem;
  font-weight: bold;
  text-align: center;
`;
export const TableTbody = styled.tbody``;

export const TableCell = styled.td<{ isSelected?: boolean }>`
  padding: 12px;
  text-align: center;
  border: 1px solid #eee;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    `
    background: #ffebee;     /* 연한 포인트 색 */
    color: #d32f2f;          /* 글자색 강조 */
    font-weight: bold;
    border-radius: 50%;      /* 원형 하이라이트 */
  `}

  &:hover {
    background: #f5f5f5;
  }
`;
export const CalendarDday = styled.div`
  padding: 12px;
  text-align: center;
`;

export const CalendarDdayText = styled(Text).attrs({
  as: 'p',
  variant: 'text.md',
})`
  font-weight: 500;
`;

export const CalendarDdayCount = styled(Text).attrs({
  as: 'strong',
  variant: 'title.sm',
})`
  color: rgb(223, 101, 223);
`;
