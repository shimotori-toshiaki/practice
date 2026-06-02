import { cookies } from "next/headers";
import { GuestHeader } from "./GuestHeader";
import { UserHeader } from "./UserHeader";
import { AdminHeader } from "./AdminHeader";

export const Header = async () => {

  const cookieStore = await cookies();
  const userToken = cookieStore.get("user-token")?.value;
  const adminToken = cookieStore.get("admin-token")?.value;

  if(userToken){
    return <UserHeader />
  }

  if(adminToken){
    return <AdminHeader />
  }

  return (
    <>
      <GuestHeader />
    </>
  );
};