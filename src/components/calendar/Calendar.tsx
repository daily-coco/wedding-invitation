import styled from 'styled-components';

interface CalendarDataProps {
  year: number;
  month: number; // 1~12
}

const Calendar = ({ ...props }: CalendarDataProps) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // 이번 달 정보

  return (
    <CalendarWrapper>
      <CalendarBody>
        <CalendarTable>
          <TableCaption>{`${props.month}월 달력`}</TableCaption>
          <TableHeader>
            <TableRow>
              {daysOfWeek.map((week) => (
                <TableHeaderCell key={week} scope='col'>
                  {week}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableTbody>
            <TableTbodyTd></TableTbodyTd>
          </TableTbody>
        </CalendarTable>
      </CalendarBody>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.section``;
const CalendarBody = styled.div``;
const CalendarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TableHeader = styled.thead`
  background: #f9f9f9;
`;
const TableCaption = styled.caption``;
const TableRow = styled.tr``;
const TableHeaderCell = styled.th`
  padding: 8px;
  font-weight: bold;
  text-align: center;
`;
const TableTbody = styled.tbody``;

const TableTbodyTd = styled.td``;
