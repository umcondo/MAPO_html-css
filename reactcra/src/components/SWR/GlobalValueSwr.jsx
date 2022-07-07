import useSWR, { mutate } from "swr";
import { generalCss } from "./globalValue";
import styled from "styled-components";
import SwrTest from "./SwrTest";
import SwrTest2 from "./SwrTest2";

const Container = styled.div`
  color: ${(props) => props.color};
`;

const LocalDiv = () => {
  const { data } = useSWR("globalValue", { fallbackData: generalCss });

  return <Container color={data.fontColor}>안녕하세요</Container>;
};

const GlobalValueSwr = () => {
  const { data } = useSWR("globalValue", { fallbackData: generalCss });
  console.log(data);
  //   const fontColor = "red";
  //   mutate("globalValue", { ...generalCss, fontColor }, false);
  console.log(data);

  const onChangeColor = () => {
    const fontColor = "blue";
    mutate("globalValue", { ...generalCss, fontColor }, false);
  };
  console.log(data);

  return (
    <>
      <div style={{ color: data.fontColor }}>ㅋㅋㅋㅋ</div>
      <LocalDiv />
      <button onClick={onChangeColor}>Change Color</button>
      <SwrTest />
      <SwrTest2 />
    </>
  );
};

export default GlobalValueSwr;
