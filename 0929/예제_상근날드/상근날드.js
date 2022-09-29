/* 상근날드에서 가장 잘 팔리는 메뉴는 세트 메뉴이다. 
햄버거와 음료를 세트로 구매하면, 가격의 합계에서 50원을 뺀 세트 가격이 된다.
햄버거는 상덕/중덕/하덕 버거가 있고, 
음료는 콜라/사이다 가 있다.
가장 싼 세트 메뉴의 가격을 출력하는 프로그램을 작성하시오.

입력은 총 다섯 줄이다. 
첫째 줄에는 상덕버거
둘째 줄에는 중덕버거
셋째 줄에는 하덕버거의 가격 
넷째 줄에는 콜라의 가격
다섯째 줄에는 사이다의 가격 
 모든 가격은 100원 이상, 2000원 이하이다.
*/ 
let menu = [];
let tmp;
tmp = prompt("상덕 버거 가격 입력 : ","");
menu[0] = Number(tmp);
tmp = prompt("중덕 버거 가격 입력 : ","");
menu[1] = Number(tmp);
tmp = prompt("하덕 버거 가격 입력 : ","");
menu[2] = Number(tmp);
tmp = prompt("콜라 가격 입력 : ","");
menu[3] = Number(tmp);
tmp = prompt("사이다 가격 입력 : ","");
menu[4] = Number(tmp);

let minBurger = menu[0];
let minDrink = menu[3];
for (let i = 0; i < 5; i++) {
    if(i < 3 && minBurger > menu[i]) minBurger = menu[i];
    if(i >= 3 && minDrink > menu[i]) minDrink = menu[i]; 
};
let sum = minBurger + minDrink;
document.write(`가장 저렴한 세트메뉴의 가격은 ${sum}원 입니다.`);