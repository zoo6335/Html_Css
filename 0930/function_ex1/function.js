// 함수 : 
// 1. 특정 작업을 여러번 반복 수행해야 하는 경우 재사용 목적으로 만듬
// 2. 특정 이벤트 발생 시 기능을 동작하게 할 수 있음
let firstVal;
let secondVal;
let op;
function inputFst(num) {
    firstVal = num;
};
function inputSec(num) {
    secondVal = num;
};
function inputOp(operator) {
    op = operator;
};
function inputEnt() {
    switch(op) {
        case "+" :
            document.write("<h1>" + (firstVal + secondVal) + "</h1>");
            break;
        case "-" :
            document.write("<h1>" + (firstVal - secondVal) + "</h1>");
            break;
        case "*" :
            document.write("<h1>" + (firstVal * secondVal) + "</h1>");
            break;
        case "/" :
            document.write("<h1>" + (firstVal / secondVal) + "</h1>");
            break;
    }
}
// 함수 선언식 : 함수를 선언하고 호출을 아무 곳에서나 할 수 있음
// function sum(p1, p2) {
//     return p1 + p2;
// }
// sum(100, 200);

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식
// sum(100,200);
// let sum = function(p1, p2) { //  함수의 주소를 대입한 것. 함수의 이름도 없음
//     return p1 + p2;
// }

// console.log(sum);

// // 함수 표현식
// const gugudan1 = function(dan) {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${3 * i}`);
//     }
// }
// // 화살표 함수
// const gugudan2 = (dan) => {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${3 * i}`);
//     }
// }
// gugudan1(3);


// 함수 및 변수의 스코프 이해
// 함수 스코프 방식 : 함수에서 정의한 블록문만 스코프 유효 범위로 간주
// 블록 스코프 방식 : ES6 부터 추가된 개념. 
// let a = 10;  // 전역
// {
//     let a = 100;
//     let b = 20;  // 지역
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);

// (function init() {
//     console.log("initialized!");
// })();

// Callback 함수 
// function cry() {
//     console.log("Cry ㅠㅜㅠㅜㅠㅜㅠㅜㅠㅜㅠㅜㅠㅜ");
// };
// function sing() {
//     console.log("Sing~~~♪♪♪♪♪♪");
// };
// function dance() {
//     console.log("Dance !!!");
// };

// function checkMood(mood){
//     if(mood == "good") sing();
//     else cry();
// };

// function checkMoodCallback(mood, goodCall, badCall) {
//     if(mood == "good") goodCall();
//     else badCall();
// }
// checkMoodCallback("bad", dance, sing);

// 기본값 할당
// function sum (a = 10, b = 20) {  // 해당 변수에 값이 들어오지 않을 경우 사용됨
//     console.log(a+b);
// }
// sum(100); 
// sum();

function 상품구매(항목, 가격, 수량, callback) {
    console.log(항목 + "상품을 " + 수량 + "개 구매하였습니다.");
    setTimeout(function(){
        console.log("계산이 필요합니다.");
        let 전체금액 = 가격 * 수량;
        callback(전체금액);
    }, 2000); // 2000 : settime 의 2초 대기를 위함
}
function 지불금액(금액) {
    console.log("지불할 금액은 : " + 금액 + " 입니다.");
}
상품구매("밤고구마", 1000, 5, 지불금액);