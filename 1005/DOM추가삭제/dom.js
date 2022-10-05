function newRegister() {
    let newItem = document.createElement("li"); // 요소 노드 추가
    let subject = document.querySelector("#subject"); // form의 input(텍스트) 필드 선택
    let newText = document.createTextNode(subject.value); // 텍스트 필드의 값으로 텍스트노드 만들기
    newItem.appendChild(newText);

    let itemList = document.querySelector("#itemList"); // 웹문서의 부모 노드 가져오기
    itemList.insertBefore(newItem, itemList.childNodes[0]); // 아이템리스트의 맨 앞에 추가

    subject.value = "";
    let items = document.querySelectorAll("li");
    for(i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function(){
            if(this.parentNode) {// 부모 노드가 있다면,
                this.parentNode.removeChild(this);  // 부모노드에서 삭제
            }
        });
    }
}
