import { useRef, useState } from "react";

// components
import UseState from "./components/UseState";
import InputSample from "./components/InputSample";
import UserList from "./components/User";
import CreateUser from "./components/CreateUser";
import UseEffect from "./components/UseEffect";

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

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInput({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const [input, setInput] = useState({
    username: "",
    email: "",
  });

  const { username, email } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
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
    </div>
  );
}

export default App;
