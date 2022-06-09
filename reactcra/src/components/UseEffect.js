import { useEffect, useState } from "react";

const UseEffect = () => {
  const user = "강대국";

  //   useEffect(() => {
  //     console.log("컴포넌트가 화면에 나타남");
  //     console.log(user);
  //     return () => {
  //       console.log("컴포넌트가 화면에 사라짐");
  //       console.log(user);
  //     };
  //   }, [user]);

  //   useEffect(() => {
  //     console.log(num);
  //   });
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum((num) => num + 1);
  };
  return <div onClick={onClick}>{num}</div>;
};

export default UseEffect;
