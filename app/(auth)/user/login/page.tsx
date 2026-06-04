import { LoginForm } from "../../_components/LoginForm";
import { userLoginAction } from "./actions";

export default function UserLoginPage() {
  return (
    <>
      <div className="w-full max-w-120 mx-auto">
        <h1 className="text-center text-[28px] font-bold mb-7">
          ユーザーログイン
        </h1>
        <LoginForm loginAction={userLoginAction} />
      </div>
    </>
  );
}
