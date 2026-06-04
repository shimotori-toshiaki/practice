import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { LogoutButton } from "../logout/LogoutButton";
import { adminNavItems } from "./navItems";

export const AdminHeader = async () => {  

  return (
    <>
      <header className="flex justify-between bg-[#f2f2f2] py-8 px-16 mb-20">
        <div>
          <h1>
            <Link href="/">管理者ヘッダー</Link>
          </h1>
        </div>
        <div className="flex">
          <HeaderNav items={adminNavItems} />
          <LogoutButton />
        </div>
      </header>
    </>
  );
};