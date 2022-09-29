let jumin = prompt("주민등록번호를 입력하세요 :", "");

while (jumin.length != 14 || jumin.indexOf("-") != 6) {
    jumin = prompt("※ 잘 못 입력하셨습니다. '6자리-7자리' 의 형태로 입력 하십시오.")
}
document.write(jumin.substr(0, 8) + "******");

let gender, age;
switch (jumin.substr(7, 1)) {
    case "1" :
        gender = "남자";
        age = 2022 - (1900 + Number(jumin.substr(0, 2)));
        break;
    case "3" :
        gender = "남자";
        age = 2022 - (2000 + Number(jumin.substr(0, 2)));
        break;
    case "2" :
        gender = "여자";
        age = 2022 - (1900 + Number(jumin.substr(0, 2)));
        break;
    case "4" :
        gender = "여자";
        age = 2022 - (2000 + Number(jumin.substr(0, 2)));
        break;
};
document.write(`<p> 성별 : ${gender} </p>`);
document.write(`<p> 나이(만) : ${age}세</p>`);
