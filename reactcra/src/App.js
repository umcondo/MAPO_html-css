import { useCallback, useMemo, useRef, useState } from "react";

// components
import UseState from "./components/UseState";
import InputSample from "./components/InputSample";
import UserList from "./components/User";
import CreateUser from "./components/CreateUser";
import UseEffect from "./components/UseEffect";

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

  const { username, email } = input;

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers((users) => users.concat(user));

    setInput({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  }, []);

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
    </div>
  );
}

export default App;
