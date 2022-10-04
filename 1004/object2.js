// let person = {
//     name : {
//         firstName : "유진",
//         lastName : "안"
//     },
//     age : 20,
//     isAdult : true,
//     printInfo : function(){
//         return this.name;
//     }
// };
// // 객체에 대한 속성(property, 함수) 에 접근은 .(점)연산자를 사용하거나 []를 사용
// console.log(person.name);
// console.log(person["name"]);

// person.name.firstName = "Youjin";
// person.name.lastName = "An";
// console.log(person.name);

// // 객체 속성 동적으로 추가하기
// const carInfo = {} // 빈 객체 생성
// carInfo.name = "소나타";
// carInfo.year = "2022/10/04";
// carInfo.maxSpeed = "250KM"
// console.log(carInfo);

// // 객체 속성을 동적으로 삭제하기
// delete carInfo.year;
// console.log(carInfo);

// 자바스크립트의 깊은 복사 : 기본자료형에서는 변수 자체의 값이 저장됨
// 기본자료형 끼리 복사를 하면 깊은 복사가 된다.
// let num = 10;  // number 형이기 때문에 변수에 값이 저장됨
// let copyNum = num; // 깊은 복사
// console.log(typeof(copyNum));
// console.log(copyNum);

// 얕은 복사 : 참조 자료형에서는 변수 공간에 데이터가 저장되는 것이 아니고, 데이터가 위치한 주소가 저장됨.
// 참조 자료형을 복사하면 값이 아닌 주소가 복사되기 때문에 얕은 복사가 일어남
// const car = {
//     name : "소나타"
// };
// car.name = "싼타페";
// console.log(car.name);

// let car = {
//     name: "싼타페"
// };
// let car2 = car;
// car.name = "제네시스";
// console.log(typeof(car2));
// console.log(car2.name);

// 표준 내장 객체 : 자바스크립트에서 개발 편의를 위해 수많은 객체가 미리 만들어져 있음
// 스코프(범위) 에 상관 없이 모든 영역에서 공통으로 사용 가능
// const pw = "123";
// if(pw.length < 4) {
//     console.log(pw.length + " 비번은 최소 4자리 이상으로 입력해라");
// }
// // 특정 문자열 포함 여부 확인 : include() : true/fales 반환
// // 특정 문자열 포함 여부 확인 : indexOf() : 
// const email = "test!name.com";
// if(email.includes("@") === false) {
//     console.log("올바른 이메일 형식이 아닙니다.");
// }
// const email2= "test!naver.com";
// if(email.indexOf("@") === -1){
// console.log("올바른 이메일 형식이 아닙니다.");
// }

// // slice() : 시작위치와 종료위치를 지정하면 문자열에서 해당 부분을 잘라서 반환
// let str = "Apple, Banana, Kiwi";
// let result = str.slice(7, 13);
// console.log(result); 

// // substring() : slice와 동일한 기능을 하지만 파라미터로 음수를 허용하지 않음
// let str2 = "Apple, Banana, Kiwi";
// let result2 = str2.substring(7, 13);
// console.log(result2);

// // 파라미터를 한개만 지정할 시 해당 위치부터 끝까지 출력
// let str = "Apple, Banana, Kiwi";
// let res = str.substring(7);
// console.log(res);

// // replace() : 문자열 내의 특정 문자열을 지정한 문자열로 변경
// let str = "지구오락실, 이영지, 안유진, 미미, 이은지";
// let newStr = str.replace("이은지", "나영석");
// console.log(newStr);
// console.log(str);

// // concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
// let txt1 = "Hello";
// let txt2 = "Javascript";
// let txt3 = txt1 + " " + txt2;
// console.log(txt3);  // 출력 : Hello Javascript
// let txt4 = txt1.concat(" ", txt2); // 출력 : Hello Javascript
// console.log(txt4);

// // trim() : 문자열 앞, 뒤 공백 제거
// let str = "          hi~ h i ~              ";
// console.log(str.trim());

// // padStart(), padEnd() : 문자열 앞과 뒤에 지정된 문자를 지정된 길이만큼 추가
// let str = "55";
// str = str.padStart(4, 0);
// console.log(str);

// // charAt() : 문자열에서 특정 인덱스에 해당하는 문자를 반환
// let addr = "서울시 강남구 역삼동 KH정보교육원";
// console.log(addr.charAt(1));

// // charCodeAt() : 문자열에서 특정 인텍스에 해당하는 문자의 유니코드 값 반환
// console.log(addr.charCodeAt(12));

// // split() : 특정 문자를 기준으로 문자열을 분리하는 함수
// let birthday = "1995-11-11";
// let arr = birthday.split("-");
// console.log(arr);

// // Number객체 : 숫자 관련 작업을 위해 사용되는 메소드
// console.log(Number.parseFloat("12"));
// console.log(Number.parseFloat("12.33"));

// console.log(Number.parseInt("12.33"));  // 문자열을 정수로 변환
// console.log(Number.parseInt("kk 11"));  // NaN(Not a Number 의 약자)

// // 배열을 다루는 Array 객체
// // 비파괴적인 메서드인 forEach()
// const arr = [10,20,30,40,50];
// arr.forEach(function(아무거나){
//     console.log(아무거나);
// });
// arr.forEach(x =>console.log(x));

// // toString() : 배열 안의 문자를 쉼표를 이용해 모두 결합하여 하나의 문자열로 반환
// let fruits = ["Banana", "Orange", "Apple", "Peach"];
// console.log(fruits.toString());

// // join() : 배열 안의 모든 문자열을 지정한 문자를 이용해 결합(비파괴적)
// console.log(fruits.join(" x "));

// // pop() : 스택 자료구조. 마지막 데이터를 제거하고 마지막 데이터를 반환함
// console.log(fruits.pop());
// console.log(fruits);

// // push() : 스택 자료구조. 배열에 새로운 요소를 추가함
// let fruits = ["Banana", "Orange", "Apple", "Peach"];
// fruits.push("Watermelon");
// console.log(fruits);

// // shift() : 배열에서 첫 번째 요소를 제거하고 첫번째 요소를 반환함
// let fruits = ["Banana", "Orange", "Apple", "Peach"];
// console.log(fruits.shift());
// console.log(fruits);

// // unshift() : 배열의 첫번째 요소에 값을 추가하고 배열의 길이를 반환
// let fruits = ["Banana", "Orange", "Apple", "Peach"];
// console.log(fruits.unshift("Lemon"));
// console.log(fruits);

// // 배열 요소 변경
// let fruits = ["Banana", "Orange", "Apple", "Peach"];
// for(let i = 0; i < fruits.length; i++) {
//     console.log("For 문 순회 " + fruits[i]);
// };
// for(let i = 0; i < fruits.length; i++) {
//     fruits[i] = "사과";
// };
// for(let e of fruits) {
//     console.log(e);
// }

// // concat() : 2개 이상의 배열을 하나의 배열로 결합
// let arr1 = ['사과', '수박', '참외'];
// let arr2 = ['포도', '딸기', '바나나'];
// let arr3 = ['키위', '망고','오렌지'];
// let arr4 = ['복숭아', '자두','체리'];
// let totFruits = arr1.concat(arr2, arr3, arr4);
// console.log(totFruits);

// // slice() : 매개변수가 하나이면 해당 인덱스 미만의 값을 잘라냄
// // 매개변수가 두개이면 시작인덱스 부터 종료 인덱스 번호까지 잘라냄
// let fruits = ["체리", "딸기", "수박", "포도", "사과"];
// console.log(fruits.slice(0, 2));  // 출력 : [ '체리', '딸기' ]
// console.log(fruits.slice(3));  // 출력 : [ '포도', '사과' ]


// // sort() : 배열에 문자형 데이터가 있는 경우 오름차순 정렬
// let fruits = ["체리", "딸기", "거봉", "포도", "사과"];
// console.log(fruits.sort()); // [ '거봉', '딸기', '사과', '체리', '포도' ]
// console.log(fruits.reverse());  // [ '포도', '체리', '사과', '딸기', '거봉' ]
// let arr = [42, 31, 100, 98, 71];
// console.log(arr.sort());  // [ 100, 31, 42, 71, 98 ]
// console.log(arr.reverse());  // [ 98, 71, 42, 31, 100 ]

// // filter() : 비파괴적인 메소드, 조건에 맞는 값을 추출해 새로운 배열 생성. 자주 사용됨
// let persons = [
//     {
//         name : "유재석",
//         point : 78,
//         city : "서울"
//     },
//     {
//         name : "박명수",
//         point : 92,
//         city : "서울"
//     },
//     {
//         name : "정준하",
//         point : 76,
//         city : "제주"
//     },
//     {
//         name : "하하",
//         point : 81,
//         city : "경기"
//     }
// ];

// let pass = persons.filter(e => e.point > 80); 
// console.log(pass);
// let pass2 = persons.filter(e => e.city === "서울"); 
// console.log(pass2);

// // Date() 객체 : 날짜와 시간을 다룸
// const date = new Date();
// console.log(date);

// const date1 = new Date(2022, 10, 04);
// console.log(date1);

// const date2 = new Date(2022, 10, 04, 16, 20, 50);
// console.log(date2);

// const date3 = new Date("2022-10-04");
// console.log(date3);

// const date4 = new Date("2022/12/25 18:30:50");
// console.log(date4);

// // 연도 출력
// console.log(date.getFullYear()); // 2022
// console.log(date.getMonth());  // 9(+1 해줘야 함. 배열의 인덱스로 반환되기 때문에 유의)


// // SET 객체 : 중복을 허용하지 않는 특성을 가짐
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(1);  

// console.log(mySet.size);
// console.log(mySet);

// // Map 객체 : 키와 값을 맵핑 시켜서 값을 저장하고 저장된 순서대로 각 요소에 접근한다.
// let map = new Map();
// map.set("name", "유나");
// map.set("email", "yuna@gmail.com");
// map.set("age", "20");
// map.set("addr", "서울시 서초구");

// console.log(map.size);  // 출력 : 4
// console.log(map.get("name"));  // 출력: 유나 (키에 대한 값을 반환)
// console.log(map.has("email")); // 출력: true (존재 여부 확인)
// map.delete("name");
// map.forEach(e => console.log(e));

// // Math 객체
// const floatNum = 10.52;
// console.log(Math.floor(floatNum));  // 출력 : 10 -내림
// console.log(Math.ceil(floatNum));   // 출력 : 11 -올림
// console.log(Math.round(floatNum));  // 출력 : 11 -반올림

// Math.random() : 0보다 크고 1보다 작은 숫자형 값(난수)을 반환함
while(true) {
    let rand = Math.floor(Math.random() * 10) + 1; // 1~10 사이의 난수
    console.log("생성된 랜덤값은 " + rand);
    if(rand == 10) break;
};