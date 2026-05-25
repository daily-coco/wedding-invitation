import { getDDay } from '../../constants/dDay';
import {
  CalendarBody,
  CalendarDate,
  CalendarDday,
  CalendarDdayCount,
  CalendarDdayText,
  CalendarTable,
  CalendarWrapper,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableTbody,
  TimeDay,
  TimeInfo,
  TimeYear,
} from './Calendar.styled';

interface CalendarDataProps {
  dateTime: string;
  // year: number;
  // month: number; // 1~12
  // selectedDate: number;
  // time: string;
}

const Calendar = ({ dateTime }: CalendarDataProps) => {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const selectedDate = date.getDate();
  // const weekday = daysOfWeek[date.getDay()];

  //🔫 버그 부분
  // const date = new Date(props.year, props.month - 1, props.selectedDate);
  // const dayIndex = date.getDay(); // 1
  // const dayName = daysOfWeek[dayIndex]; // '월'

  //🔫 결혼식 날짜 포맷 형태 수정(보편적으로 쓰이는 형태)
  // const formattedDate = new Intl.DateTimeFormat('ko-KR', {
  //   timeZone: 'Asia/Seoul',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   weekday: 'long',
  //   hour: 'numeric',
  //   minute: '2-digit',
  // }).format(date);

  // 시간 포맷(한국)
  const time = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);

  // 요일
  const weekday = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    weekday: 'long',
  }).format(date);

  /** 아래부터 달력 그리는 소스 **/
  // 요일 추출
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // 이번 달 정보
  const firstDay = new Date(year, month - 1, 1).getDay(); // 시작 요일
  const daysInMonth = new Date(year, month, 0).getDate(); // 총 일수

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

  // DdayCounter
  const weddingDDay = getDDay(date);

  return (
    <CalendarWrapper>
      <CalendarDday>
        <CalendarDdayText>
          신랑&middot;신부의 <br />
          빛나는 결혼식이
          <CalendarDdayCount>D-{weddingDDay}</CalendarDdayCount>일 남았습니다.
        </CalendarDdayText>
      </CalendarDday>

      <CalendarDate>
        <TimeYear>{`${year}년 ${month}월 ${selectedDate}일`}</TimeYear>
        <TimeDay>{weekday}</TimeDay>
        <TimeInfo>{time}</TimeInfo>
      </CalendarDate>

      <CalendarBody>
        <CalendarTable>
          <TableCaption>{`${month}월`}</TableCaption>
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
                    className={day === selectedDate ? 'special-day' : ''}
                    isSelected={day === selectedDate}
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
