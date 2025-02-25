import Input from "../components/commons/Input";
import Buttons from "../components/commons/Buttons";
import { useLogin } from "../utils/hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { loginObj, setLoginObj, handleLogin, isLoading } = useLogin();

  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full h-fit max-w-md m-16 p-6 shadow-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">로그인</h1>
          <p className="mt-2 text-sm text-gray-600">
            MBTI 테스트를 시작하려면 로그인해주세요
          </p>
        </div>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <Input
            label={"아이디"}
            type={"text"}
            logic={(e) => setLoginObj({ ...loginObj, id: e.target.value })}
          />
          <Input
            label={"비밀번호"}
            type={"password"}
            logic={(e) =>
              setLoginObj({ ...loginObj, password: e.target.value })
            }
          />
          <Buttons label={"로그인"} type={"submit"} mutation={isLoading} />
          <button type="button" onClick={() => navigate("/signup")}>
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
