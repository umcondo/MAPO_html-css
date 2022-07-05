import { useState } from "react";
import useSWR, { mutate } from "swr";
import initialState from "../utils/store";

const Profile = () => {
  const { data } = useSWR("globalState", { fallbackData: initialState });
  const [value, setValue] = useState((data || {}).name);

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>My name is {data.name}</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 200, marginRight: 8 }}
      />
      <button
        type="button"
        onClick={() => {
          //   mutate("globalState", { ...data, name: value }, false);
          setValue((value) => value.toUpperCase());
        }}
      >
        UpperCase my name!
      </button>
    </div>
  );
};

const Other = () => {
  const { data } = useSWR("globalState", { fallbackData: initialState });
  if (!data) {
    return null;
  }
  return (
    <div style={{ border: "1px solid #ddd", marginTop: 30, padding: 20 }}>
      <h1>
        Another component : <br />
        My name is {data.name}.
      </h1>
    </div>
  );
};

const Index = () => {
  return (
    <div style={{ padding: 40 }}>
      useSWR can share state between components:
      <Profile />
      <Other />
    </div>
  );
};

export default Index;
