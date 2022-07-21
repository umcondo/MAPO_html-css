// fetch
// axios

import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:3005/api/todo";
const ServerDataAPI = () => {
  //url, http method를 알아야함

  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
    // fetch("http://localhost:3005/api/todo", { method: "GET" })
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  //   console.log("render");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;

    await axios.post(SERVER_URL, {
      text,
      done,
    });
    fetchData();
    // fetch("http://localhost:3005/api/todo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => {
    //   fetchData();
    // });
  };

  return (
    <div>
      <h1>서버API연습</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      <>
        {todoList?.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? "Y" : "N"}</div>
          </div>
        ))}
      </>
    </div>
  );
};

export default ServerDataAPI;
