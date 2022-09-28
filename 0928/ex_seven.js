/* 3. 1~1000 사이의 7의 배수를 구하고 한 줄에 10개씩 출력하기 */
let cnt = 0;
for(let i = 1; i<= 1000; i++){
    if (i % 7 == 0) {
        document.write( "<span class = double>" + i +"</span>");
        cnt++;
        if(cnt == 10) {
            document.write("<br>");
            cnt = 0;
        }
    }
}
