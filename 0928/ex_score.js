/* 1. 성적을 입력받아 학점 출력하기
- 0~100점 사이가 아니면 입력 오류 출력
- 90점 이상 A
- 80점 이상 B
- 70점 이상 C
- 60점 이상 D
- 나머지 F 처리
*/
let score = prompt("성적을 입력하세요.", "ex) 90");
if (score < 0 || score > 100) document.write("잘못 입력하셨습니다.");
else {
    if (score >= 90) document.write("<p class='score'>학점 : A</p>");
    else if (score >= 80) document.write("<p class='score'>학점 : B</p>");
    else if (score >= 70) document.write("<p class='score'>학점 : C</p>");
    else if (score >= 60) document.write("<p class='score'>학점 : D</p>");
    else document.write("<p class='score'>학점 : D</p>");
}
