fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    document.querySelector("h1").innerText = json.title;
    document.querySelector("h3").innerText = json.body;
    document.querySelector("textarea").innerText = json.body;
  });

// table
const tableText = document.getElementById("content");

fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      let tableContent = `<tr>`;
      tableContent += `       <td>${json[i].id}</td>`;
      tableContent += `       <td>${json[i].title}</td>`;
      tableContent += `       <td>${json[i].userId}</td>`;
      tableContent += `   </tr>`;

      tableText.innerHTML += tableContent;
    }
  });
