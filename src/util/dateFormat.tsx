export default function dateFormat() {
  const today = new Date();
  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
    day: today.getDay(),
  };
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return `${time.month}월 ${time.date}일 (${week[time.day]}) ${
    time.hours < 12 ? "오전" : "오후"
  } ${time.hours < 10 ? `0${time.hours}` : time.hours}:${
    time.minutes < 10 ? `0${time.minutes}` : time.minutes
  }`;
}
