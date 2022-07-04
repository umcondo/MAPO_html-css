import axios from "axios";

const GetKaKao = () => {
  const onGetKakaoToken = () => {
    axios
      // .get("https://hee-backend.shop:7179/auth/kakao", {
      .get("/auth/kakao", {
        withCredentials: true,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.dir(error));
  };
  return (
    <div>
      <h1>카카오 토큰 받아오기</h1>
      <button onClick={onGetKakaoToken}>토큰 받기</button>
    </div>
  );
};

export default GetKaKao;
