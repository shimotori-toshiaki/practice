import "./globals.css";
import { Header } from "./_components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="w-full max-w-300 mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
