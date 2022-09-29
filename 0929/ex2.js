// // 조건문 : 조건식의 결과가 참인 경우 수행
// if~
// let num = 20;
// if(num >= 0) console.log("양수 입니다");
// else console.log("음수입니다.");

// if(num > 10) console.log(num + "은 10보다 커요");
// else if (num < 10) {
//     console.log(num + "은 10보다 작아요.");
// } else {
//     console.log(num + "은 10과 같아요.");
// }

// // switch 문
// let a, b, op, tmp;
// tmp = prompt("값 입력 : ","");
// a = Number(tmp);
// tmp = prompt("연산자 입력 : ","");
// op = tmp;
// tmp = prompt("값 입력 : ","");
// b = Number(tmp);

// switch(op) {
//     case "+" :
//         document.write("덧셈 : " + (a+b));
//         break;
//     case "-" :
//         document.write("뺄셈 : " + (a-b));
//         break;
//     case "*" :
//         document.write("곱셈 : " + (a*b));
//         break;
//     case "/" :
//         document.write("나눗셈 : " + (a/b));
//         break;
//     default :
//         document.write("계산식 오류");
// }

// // 반복문 연습 ~!
// let brands = ["apple", "google", "facebook", "instagram","samsung"];
// for (let i = 0; i < brands.length; i++) {
//     console.log(brands[i]);
// };
// //for-in : 배열 뿐만 아니라 오브젝트에서도 사용 가능
// let person = {
//     fname : "찬호",
//     lname : "정",
//     age : "23"
// };
// for(let key in person) {
//     console.log(`${key}의 값은 ${person[key]} 입니다.`);  // 오브젝트 key에 해당하는 값을 모두 출력
// };

// // for-of : 자바의 향상된 for 문과 같음
// for(let e of brands) {
//     console.log(e);
// }
// let lang = "Javascript";
// for(let a of lang) {
//     console.log(a);
// }

// 구구단 출력하기
// for(let i = 2; i < 10; i++) {
//     document.write("<table>");
//     document.write("<tr><th>" + i + "단</th></tr>");
//     for(let j = 1; j < 10; j++) {
//         document.write("<tr><td>" + i + " x " + j + " = " + (i*j) + "</td></tr>");
//     };
//     document.write("</table>")
// }

// // 10번 찍어 넘어가는 나무...
// let treeHit =0;
// while(treeHit < 10) {
//     treeHit++;
//     document.write("<p>나무를" + treeHit + " 번 찍었습니다.</p>");
//     if(treeHit == 10) {
//         document.write("<h2>나무가 넘어갑니다.</h2>")
//     }
// };
