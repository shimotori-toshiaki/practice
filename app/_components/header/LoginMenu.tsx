"use client";

import Link from "next/link";
import { useState } from "react";

export const LoginMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <li className="relative">
      <div>
        <button type="button" onClick={handleClick}>
          ログイン
        </button>
      </div>
      {isOpen && (
        <ul className="absolute">
          <li>
            <Link href="/admin/login">管理者ログイン</Link>
          </li>
          <li>
            <Link href="/user/login">ユーザーログイン</Link>
          </li>
        </ul>
      )}
    </li>
  );
};
