// // 배열 기본 : 대괄호로 묶어서 생성함
// let score = [88,99,77,67];
// console.log(score[2]);
// console.log(typeof(score));

// // const name = "이주봉";
// // name = "릴리";
// // console.log(typeof(name));

// for(let i = 0; i < score.length; i++) {
//     console.log(`배열의 ${i}번째 값은 ${score[i]}입니다.`)
// }

// // 자바의 배열과 다른 점
// let array = ["짱구는 못말려", "봉미선", 28, true, [100, 99, 88],["블랙핑크", "아이브", "에스파", "2NE1"]]; 
// array[0] = "잇지";  

// console.log(array[0]);
// console.log(array[4]);
// console.log(array[0][2]);
// console.log(array[5][3][2]);

// 객체 리터럴 : 키와 값으로 구성, 중괄호로 만든다. 
// let score = [88,77,65,86]; //국 영 수 과
// let scoreObject = [
//     {
//         korScore : 88,
//         engScore : 77,
//         matScore : 65,
//         scnScore : 86
//     },
//     {
//         korScore : 77,
//         engScore : 65,
//         matScore : 59,
//         scnScore : 47
//     },
//     {
//         korScore : 99,
//         engScore : 98,
//         matScore : 100,
//         scnScore : 100
//     }
// ];
// console.log(scoreObject[1]);
// for (let i = 0; i < scoreObject.length; i++) {
//     console.log(`${i} 번째 사람의 국어 성적 : ${scoreObject[i].korScore}`)
//     console.log(`${i} 번째 사람의 영어 성적 : ${scoreObject[i].engScore}`)
//     console.log(`${i} 번째 사람의 수학 성적 : ${scoreObject[i].matScore}`)
//     console.log(`${i} 번째 사람의 과학 성적 : ${scoreObject[i].scnScore}`)
//     console.log("----------------------------");
// }

// let name = {
//     city : ["서울", "부산", "인천", "대구", "대전", "광주"],
//     fruit : ["바나나", "사과", "오렌지", "수박", "딸기"]
// }
// console.log(name.city[0]);
// for (let key in name) {
//     console.log(`${key} : ${name[key]}`);
// }
// 연산자
let num = 10;
console.log(2**10);         // 제곱 연산자(**)
console.log(Math.round(num/3)); 
console.log(num%3);         // 나머지 연산자
// 대입연산자와 복합대입연산자
let num2 = 10;
// console.log(num2 += 2);     
console.log(num2 *= 2);     
// 비교연산자
console.log(10 == '10');
console.log(10 !== '10');
console.log(10 === '10');
console.log(10 > '9');
console.log("Javascript" < "javascript");

// 형 변환 : 묵시적, 명시적 
let num1 = 10 + Number("10");
console.log(num1);

let name2 = 10 + String(20);
console.log(name2);