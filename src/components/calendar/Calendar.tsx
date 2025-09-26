import styled from 'styled-components';

interface CalendarDataProps {
  marredMonth: number;
}

const Calendar = ({ ...props }: CalendarDataProps) => {
  return (
    <CalendarWrapper>
      <CalendarBody>
        <CalendarMonth>{props.marredMonth}</CalendarMonth>
      </CalendarBody>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.section``;
const CalendarBody = styled.div``;
const CalendarMonth = styled.strong``;
