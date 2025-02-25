import { useState } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import Input from "../components/commons/Input";
import Buttons from "../components/commons/Buttons";

export default function SignUp() {
  const [obj, setObj] = useState({ id: "", password: "", nickname: "" });

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => console.log(data),
  });

  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full h-fit max-w-md m-16 p-6 shadow-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">회원가입</h1>
          <p className="mt-2 text-sm text-gray-600">
            저희 사이트가 처음이시라면 회원가입을 해주세요
          </p>
        </div>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate(obj);
          }}
        >
          <Input
            label={"아이디"}
            type={"text"}
            logic={(e) => setObj({ ...obj, id: e.target.value })}
          />
          <Input
            label={"비밀번호"}
            type={"password"}
            logic={(e) => setObj({ ...obj, password: e.target.value })}
          />
          <Input
            label={"닉네임"}
            type={"text"}
            logic={(e) => setObj({ ...obj, nickname: e.target.value })}
          />
          <Buttons label={"회원가입"} type={"submit"} mutation={mutation} />
        </form>
      </div>
    </div>
  );
}
