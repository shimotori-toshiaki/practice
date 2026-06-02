import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { guestNavItems } from "./navItems";

export const GuestHeader = async () => {  

  return (
    <>
      <header className="flex justify-between bg-[#f2f2f2] py-8 px-16 mb-20">
        <div>
          <h1>
            <Link href="/">ゲストヘッダー</Link>
          </h1>
        </div>
        <HeaderNav items={guestNavItems} />
      </header>
    </>
  );
};