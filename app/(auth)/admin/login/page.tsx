import { LoginForm } from "../../_components/LoginForm";
import { adminLoginAction } from "./actions";

export default function AdminLoginPage(){
    return(
        <>
            <div className="w-full max-w-120 mx-auto">
                <h1 className="text-center text-[28px] font-bold mb-7">管理者ログイン</h1>
                <LoginForm loginAction={adminLoginAction} />
            </div>
        </>
    )
}