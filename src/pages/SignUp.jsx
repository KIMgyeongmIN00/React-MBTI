import { useState } from "react";
import { register } from "../api/auth";

export default function SignUp() {
  const [obj, setObj] = useState({ id: "", password: "", nickname: "" });

  async function onSubmitSignUpHandler(obj) {
    // 됨
    const data = await register(obj);
    return console.log(data);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitSignUpHandler(obj);
      }}
    >
      <p>아이디 :</p>
      <input
        className="border-4"
        type="text"
        onChange={(e) => {
          setObj({ ...obj, id: e.target.value });
        }}
      />
      <p>비밀번호 :</p>
      <input
        className="border-4"
        type="text"
        onChange={(e) => {
          setObj({ ...obj, password: e.target.value });
        }}
      />
      <p>닉네임 :</p>
      <input
        className="border-4"
        type="text"
        onChange={(e) => {
          setObj({ ...obj, nickname: e.target.value });
        }}
      />
      <br />
      <button className="border-8 border-black" type="submit">
        등록하기
      </button>
    </form>
  );
}
