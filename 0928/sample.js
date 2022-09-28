// 3개의 정수를 입력받아 가장 큰 수와 작은 수 구하기
let a, b, c;
let min, max;
a = prompt("첫번째 수 입력 : ", "");
b = prompt("두번째 수 입력 : ", "");
c = prompt("세번째 수 입력 : ", "");

if(a > b) { 
   if(a > c) max = a;
   else min = b;
} else {
    if(b > c) max = b;
    else max = c;
}

if(a > b) {
    if(b > c) min = c ;
    else min = b;
}else {
    if(a > c) min = d;
    else min = a;
}

document.write("<h3> 제일 큰 값 : " + max + " </h3>");
document.write("<h3> 제일 작은 값 : " + min + " </h3>");