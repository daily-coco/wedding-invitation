export function getDDay(dateTime: string | Date) {
  const today = new Date();
  const target = new Date(dateTime);

  const diff =
    target.getTime() -
    new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
