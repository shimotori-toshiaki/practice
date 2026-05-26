import { LoginForm } from "../../_components/LoginForm";
import { userLoginAction } from "./actions";

export default function UserLoginPage(){
    return(
        <>
            <h1>ユーザーログイン</h1>
            <LoginForm loginAction={userLoginAction} />
        </>
    )
}