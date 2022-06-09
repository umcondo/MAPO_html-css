import React, { useEffect } from "react";
import styled from "styled-components";

const StyledCompo = styled.div`
  cursor: pointer;
  color: ${(props) => (props.active ? "green" : "black")};
`;
const User = React.memo(
  ({ username, email, id, onRemove, active, onToggle }) => {
    // useEffect(() => {
    //   console.log(username);
    // });
    return (
      <>
        <StyledCompo active={active}>
          <span onClick={() => onToggle(id)}>{username}</span>
        </StyledCompo>
        <span>{email}</span>
        <button onClick={() => onRemove(id)}>삭제</button>
      </>
    );
  }
);

function UserList({ users, onRemove, onToggle }) {
  const numbers = [1, 2, 3, 4, 5];
  let numId = 1;

  return (
    <div>
      {users.map((elm) => (
        <User {...elm} key={elm.id} onRemove={onRemove} onToggle={onToggle} />
      ))}

      {numbers.map((num) => (
        <div key={numId++}>{num}</div>
      ))}
    </div>
  );
}
export default React.memo(UserList);
