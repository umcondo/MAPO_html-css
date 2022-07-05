import { useCallback, useMemo, useRef, useState } from "react";

// components
import UseState from "./components/UseState";
import InputSample from "./components/InputSample";
import UserList from "./components/User";
import CreateUser from "./components/CreateUser";
import UseEffect from "./components/UseEffect";
import useInputs from "./components/UseInputs";
import DataBinding from "./DataBinding";
import GetKaKao from "./components/GetKaKao";
import Swr from "./components/Swr";
import Swr2 from "./components/Swr2";
import SwrCounter from "./components/SwrCounter";
import Index from "./components/SwrExam";

const countActiveUser = (users) => {
  console.log("활성 사용자를 세는중 ...");
  return users.filter((user) => user.active).length;
};

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const [input, setInput] = useState({
    username: "",
    email: "",
  });

  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers((users) => users.concat(user));

    reset();

    nextId.current += 1;
  }, [username, email, reset]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <div className="App">
      <UseState />
      <br />
      <InputSample />
      <br />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <hr />
      <CreateUser
        onCreate={onCreate}
        onChange={onChange}
        username={username}
        email={email}
      />
      <hr />
      <h1>UseEffect연습</h1>
      <UseEffect />
      <h1>useMemo연습</h1>
      <div>{count}</div>
      <h1>useRef연습 - 데이터 바인딩</h1>
      <DataBinding />
      <hr />
      <GetKaKao />
      <hr />
      <Swr />
      <Swr2 />
      <hr />
      <SwrCounter />
      <Index />
    </div>
  );
}

export default App;
