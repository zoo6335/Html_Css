// ▶ 노드 선택하기 ◀
// id 속성값이 title인 요소 노드 선택
// const el = document.getElementById("title");
// console.log(el);

// class 속성값이 text 인 요소 노드 선택
// const clsEl = document.getElementsByClassName("text");
// console.log(clsEl);
// HTMLCollection 객체는 유사 배열이라서 배열의 인덱스로 요소 접근이 가능하다.
// console.log(clsEl[0]);
// console.log(clsEl[1]);
// for(let el of clsEl) console.log(el);

// 테그명이 p 인 요소 노드 선택
// const tagEl = document.getElementsByTagName("p");
// console.log(tagEl);
// console.log(tagEl[1]);
// for(let el of tagEl) console.log(el);

//-------------------------------------------------------------------------------------------

// CSS 선택자 사용- query 메서드
// const el = document.querySelector(".box-1");
// console.log(el);

// box-1 클래스의 text 클래스 노드 모두 선택
// const el_1 = document.querySelectorAll(".box-1 .text");
// for(let el of el_1) console.log(el);

//-------------------------------------------------------------------------------------------
// ▶ 노드 조작하기 ◀
// 1. 컨텐츠 조작하기
// textContent : 요소 노드의 모든 텍스트에 접근
// innerText : 요쇼 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트에만 접근
// innerHTML : 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트에만 접근
// let txtCon = document.getElementById("title").textContent;
// let inTxt = document.getElementById("title").innerText;
// let inHtml = document.getElementById("title").innerHTML;

// console.log(txtCon);  // 출력 :  Hello, Javascript!!! 
// console.log(inTxt);   // 출력 : Hello,
// console.log(inHtml);  // 출력 : Hello, <span style="display: none;">Javascript!!!</span> 

// 2. 스타일 조작하기
// const pEl = document.querySelector("#text");
// pEl.style.backgroundColor = "#ff0000";
// pEl.style.fontSize = "20px";
// pEl.style.color = "#ffffff";
// pEl.style.fontWeight = "bold";

// 3. 클래스 속성으로 조작하기
// const elId = document.querySelector("#text");
// elId.classList.add("active", "red-color", "box");

// 4. 메서드로 속성 조작하기
// 노드.getAttribute("속성명") : 속성값을 가져옴
// 노드.setAttribute("속성명", "속성값") : 속성값을 설정함
// 노드.removeAttribute("속성명") : 속성을 삭제함
// const aEl = document.querySelector("a");
// const href = aEl.getAttribute("href");
// aEl.setAttribute("href", "http://kakao.com");
// aEl.innerText = "카카오";
// aEl.removeAttribute("href");

//-------------------------------------------------------------------------------------------
// ▶ 노드 추가/삭제하기 ◀
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);
// const test = document.querySelector("a");
// test.innerHTML = "테스트";
// test.setAttribute("href", "http://google.co.kr");
// 노드 삭제 하기
// document.body.removeChild(aEl);

//-------------------------------------------------------------------------------------------
// ▶ 폼 조작하기 ◀
