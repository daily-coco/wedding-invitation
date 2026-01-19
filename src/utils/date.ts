const KST = 'Asia/Seoul';

type DateInput = Date | string | number;

function toDate(input: DateInput) {
  return input instanceof Date ? input : new Date(input);
}

/** 예: 2099.1.1 */
export function formatDotYMD(input: DateInput) {
  const d = toDate(input);

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1);
  const day = String(d.getDate());

  return `${y}.${m}.${day}`;
}

/** 예: 2099년 10월 10일 */
export function formatKoreaYMD(input: DateInput) {
  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: KST,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(toDate(input));
}

/** 예 : 수요일 */
export function formatWeekDay(input: DateInput) {
  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: KST,
    weekday: 'long',
  }).format(toDate(input));
}

/** 예: 오전 11시 30분 */
export function formatKoreanTime(input: DateInput) {
  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: KST,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(toDate(input));
}

/** 예: 2027년 10월 10일 수요일 오전 11시 30분 */
export function formatKoreanFull(input: DateInput) {
  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: KST,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(toDate(input));
}
