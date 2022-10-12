// 생성자를 만드는 방법

// 함수 선언문으로 정의하는 방법
// function Card(suit, rank) {
//     this.suit = suit;
//     this.rank = rank;
// }
// Card.prototype.show = function() {
//     console.log(this.suit + this.rank);
// }
// let card = new Card(5, 5);
// card.show();
// let card2 = new Card(100, 200);
// card2.show();
//--------------------------------------------
// class 선언문으로 정의 ->요즘 방식
// class Card {
//     constructor(suit, rank) {
//         this.suit = suit;
//         this.rank = rank;
//     }
//     show() {
//         console.log(this.suit + this.rank);
//     }
// }
// let card = new Card(5, 5);
// card.show();
//--------------------------------------------
// class 표현식으로 정의
// let Card = class {
//     constructor(suit, rank) {
//         this.suit = suit;
//         this.rank = rank;
//     }
//     show() {
//         console.log(this.suit + this.rank);
//     }
// }
//--------------------------------------------
// ES6 클래스 구문
// class GirlGroup {
//     constructor(grp, name, age, pos){
//         this.groupName = grp;
//         this.name = name;
//         this.age = age;
//         this.position = pos;
//         GirlGroup.memberCnt++;  // 새로운 객체가 생성자를 통해 만들어 질 때 더해진다. 전역변수의 특성으로 블록 바깥에서 초기화 해주어야 함
//     }
//     prnInfo() {
//         console.log("그룹 : " + this.groupName);
//         console.log("이름 : " + this.name);
//         console.log("나이 : " + this.age);
//         console.log("포지션 : " + this.position);
//     }
//     static getMember() {
//         return GirlGroup.memberCnt;
//     }
// }
// GirlGroup.memberCnt = 0;
// let itzy1 = new GirlGroup("잇지", "예지", "23", "리더");  // 클래스를 통해 객체 생성
// let itzy2 = new GirlGroup("잇지", "리아", "22", "보컬");  // 클래스를 통해 객체 생성
// let itzy3 = new GirlGroup("잇지", "예지", "21", "댄서");  // 클래스를 통해 객체 생성
// let itzy4 = new GirlGroup("잇지", "룰루", "22", "래퍼");  // 클래스를 통해 객체 생성
// let itzy5 = new GirlGroup("잇지", "뽀삐", "21", "보컬");  // 클래스를 통해 객체 생성

// console.log(GirlGroup.getMember());
// itzy1.prnInfo();
// itzy2.prnInfo();
// itzy3.prnInfo();
// itzy4.prnInfo();
// itzy5.prnInfo();

// 상속
class Car {
    constructor(name, year, speed) {
        this.name = name;
        this.productYear = year;
        this.maxSpeed = speed;
    }
}
class SportCar extends Car {
    constructor(isTurbo) {
        super("Ferrari", 2022, 220); // 부모의 생성자 호출
        this.isTurbo = isTurbo;
    }
    getSpeed() {
        return(this.isTurbo) ? this.maxSpeed * 1.2 : this.maxSpeed;
    }
}

let ferrari = new SportCar(true);
console.log("최대 속도 : " + ferrari.getSpeed());
