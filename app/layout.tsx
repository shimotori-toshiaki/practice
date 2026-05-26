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
            <Link href="/">ホームページ</Link>
          </li>
          <li>
            <Link href="/admin/login">管理者ログイン</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
