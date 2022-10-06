// let str = "Hello world !!!";  // 입력받은 문자열
// const regEx = /World/; // 검사할 정규식 조건
// console.log(regEx.test(str)); // 대응되는 문자열 포함 여부 확인
// console.log(str.search(regEx)); // 해당 문자열 인덱스 반환 (없으면 -1)

// // exec() 메소드 : 인수로 전달된 문자열애서 패턴을 검색하여 일치하는 문자열 반환
// let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// let regEx = /가장+/;
// let result = regEx.exec(inputStr);
// console.log(result); // 찾는 문자열이 없으면 null 반환

// 전화번호 검사하기
let inputNum = "Hi~ ! 저는 jy.lee 이고, 전화번호는 010-8888-9999 010-2938-6335, 010-5672-9455입니다.";
// const regEx = /\d{2,3}-\d{4}-\d{4}/g;  // 숫자3-숫자4-숫자4
// let rst = inputNum.match(regEx);
// console.log(rst);
// for(let e of rst) console.log(e);

// 간단한 매칭
// const regex = /010/g;
// const regex = /[0-9]/g;    // 모든 숫자 찾기
// const regex = /[^0-9]/g;  // 숫자가 아닌 모든 문자  찾기
const regex = /[a-z]/g; // 모든 알파벳 소문자 찾기
let rst = inputNum.match(regex);
for(let e of rst) console.log(e);
