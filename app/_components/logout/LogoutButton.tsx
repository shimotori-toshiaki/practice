import { logoutAction } from "@/app/_actions/auth/logout";

export const LogoutButton = () => {
    return(
        <>
            <button onClick={logoutAction}>ログアウト</button>
        </>
    )
}