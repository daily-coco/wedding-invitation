import styled from 'styled-components';

interface CalendarDataProps {
  year: number;
  month: number; // 1~12
  selectedDate: number;
  time: string;
}

const Calendar = ({ ...props }: CalendarDataProps) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // 이번 달 정보

  const firstDay = new Date(props.year, props.month - 1, 1).getDay(); // 시작 요일
  const daysInMonth = new Date(props.year, props.month, 0).getDate(); // 총 일수

  const date = new Date(props.year, props.month, props.selectedDate);
  const dayIndex = date.getDay(); // 1
  const dayName = daysOfWeek[dayIndex]; // '월'

  // 날짜 배열 생성
  const daysArray = [
    ...Array(firstDay).fill(null), // 시작 전 빈칸
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1), // 날짜
  ];

  // 7일 단위로 자르기 (주 단위 배열)
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < daysArray.length; i += 7) {
    weeks.push(daysArray.slice(i, i + 7));
  }

  return (
    <CalendarWrapper>
      <CalendarDate>
        <time>
          <span>{`${date}`}</span>
          <span>{`${dayName}`}</span>
          <span>{props.time}</span>
        </time>
      </CalendarDate>

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
            {weeks.map((week, i) => (
              <TableRow key={`${i}`}>
                {week.map((day, j) => (
                  <TableCell
                    key={j}
                    className={day === props.selectedDate ? 'special-day' : ''}
                    isSelected={day === props.selectedDate}
                  >
                    {day || ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableTbody>
        </CalendarTable>
      </CalendarBody>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.section``;
const CalendarDate = styled.div``;
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

const TableCell = styled.td<{ isSelected?: boolean }>`
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
