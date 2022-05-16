fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    document.querySelector("h1").innerText = json.title;
    document.querySelector("h3").innerText = json.body;
    document.querySelector("textarea").innerText = json.body;
  });

// table
console.time("calculatingTime");
console.timeEnd("calculatingTime");
console.time("calculatingTime");
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      const tableText = document.getElementById("content");

      let tableContent = ` <tr>`;
      tableContent += `       <td>${json[i].id}</td>`;
      tableContent += `       <td>${json[i].title}</td>`;
      tableContent += `       <td>${json[i].userId}</td>`;
      tableContent += `   </tr>`;

      tableText.innerHTML += tableContent;
    }
  });
console.timeEnd("calculatingTime");

// // json Call
// function request() {
//   fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then((response) => response.json())
//     .then((json) => {

//       // json 값 담기
//       const title = json[0].title;
//       const body = json[0].body;

//       document.getElementById("title").innerHTML = title;       // h1
//       document.getElementById("body").innerHTML = body;         // h3
//       document.getElementById("test").innerText = body;         // textarea

//      // table 출력
//       for (let i = 0; i < json.length; i++) {
//         let tbody = document.getElementById("json_tbody");

//         // 테이블 마지막행에 row 추가
//         let row = tbody.insertRow(tbody.rows.length);

//         // cell 추가
//         let cell1 = row.insertCell(0);
//         let cell2 = row.insertCell(1);
//         let cell3 = row.insertCell(2);

//         cell1.innerHTML = i + 1;            // 게시물 번호 (현재 데이터로는 json[i].id 도 가능)
//         cell2.innerHTML = json[i].title;    // 제목
//         cell3.innerHTML = json[i].userId;   // 작성자
//     });
// }

// request();
