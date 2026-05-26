import { LoginForm } from "../../_components/LoginForm";
import { adminLoginAction } from "./actions";

export default function AdminLoginPage(){
    return(
        <>
            <h1>管理者ログイン</h1>
            <LoginForm loginAction={adminLoginAction} />
        </>
    )
}