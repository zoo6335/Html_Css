// 1. 객체 리터럴로 객체를 생성하는 방법
// let memberInfo = {
//     name : "유나",
//     age : 20,
//     addr : "경기도 수원시",
//     gender : "여성"
// }
// console.log(memberInfo);

// 2. 생성자로 생성하는 방법
// function MemberInfo (name, age, addr, gender) {
//     this.name = name;
//     this.age = age;
//     this.addr = addr;
//     this.gender = gender;
// }
// let memberInfo = new MemberInfo("유나", 20, "경기도 수원시", "여성");
// let memberInfo1 = new MemberInfo("안유진", 20, "서울시 강남구", "여성");
// console.log(memberInfo);

// 3. object.create 로 생성하는 방법
// // 지정된 프로토타입 객체와 프로퍼티를 가지고 새로운 객체를 만들어 줌
// let member = Object.create(Object.prototype, {
//     name: {
//         value : "유나",
//         writable : true,
//         enumerable : true,
//         configurable : true
//     },
//     age: {
//         value : 20,
//         writable : true,
//         enumerable : true,
//         configurable : true
//     },
//     addr: {
//         value : "서울시 방배동",
//         writable : true,
//         enumerable : true,
//         configurable : true
//     },
//     gender: {
//         value : "여성",
//         writable : true,
//         enumerable : true,
//         configurable : true
//     }
// });
// console.log(member);


// 프로토 타입
// 1번
// function Circle(center, radius) {  // 함수 선언식
//     this.center = center;    // 프로퍼티
//     this.radius = radius;
//     this.area = function() { // 함수 표현식
//         return Math.PI * this.radius * this.radius;
//     };
// };
// 2번
// function Circle(center, radius) {  // 함수 선언식
//     this.center = center;    // 프로퍼티
//     this.radius = radius;
// };
// Circle.prototype.area = function(){
//     return Math.PI * this.radius * this.radius;
// }

// let c1 = new Circle(1, 2.0);
// let c2 = new Circle(2, 3.0);
// let c3 = new Circle(3, 4.0);
// console.log(c1.area());
// console.log(c2.area());
// console.log(c3.area());

// 프로토타입 상속
// 자바스크립트는 프로토타입 상속에 기반을 둔 객체지향 언어 입니다.
let objA={
    name : "Tom",
    sayHello: function() {
        console.log("hello! "+ this.name);
    }
};

let objB = {
    name: "Huck"
};
objB.__proto__ = objA;

let objC = {};
objC.__proto__ = objB;
objC.sayHello();