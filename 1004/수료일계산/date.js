let dDay = new Date("2022-12-26");
let now = new Date();
// 1970년 1월 1일 12:00 이후의 시간을 밀리초 단위로 표시
let toNow = now.getTime();
let toDay = dDay.getTime();
let remainTime = toDay - toNow;

// 24시간 X 60분 X 60초 X 1000밀리초
remainTime = Math.round(remainTime/(1000*60*60*24));
document.querySelector("#result").innerHTML = remainTime;
