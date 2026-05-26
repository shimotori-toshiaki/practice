import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ul>
          <li>
            <Link href="/">トップページ</Link>
          </li>
          <li>
            <Link href="/admin/login">管理者ログイン</Link>
          </li>
          <li>
            <Link href="/user/login">ユーザーログイン</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
