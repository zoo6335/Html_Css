// ▶ id 가 1인 데이터 조회
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((Response)=> Response.json())
// .then((json)=> console.log(json));

// ▶ 데이터 생성
fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",
    body : JSON.stringify({
        title : "JSON Test",
        body : "JSON과 비동기 통신에 대해 연습",
        userId : 1
    }),
    headers: {
        "content-type" : "application/json; charset=UTF-8"
    },
})
.then((response) => response.json)
.then((json) => console.log(json));

// ▶ PUT : 데이터 수정
// fetch("https://jsonplaceholder.typicode.com/posts", {

//     method : "PUT",
//     body : JSON.stringify ({
//         id : 1,
//         title : "Fetch API Test",
//     }),
//     headers : {
//         "content-type" : "application/json; charset=UTF-8"
//     }
// })
// .then((rsp)=> rsp.json())
// .then((json)=> console.log(json));

// ▶ DELETE : 데이터 삭제
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "DELETE"
});

