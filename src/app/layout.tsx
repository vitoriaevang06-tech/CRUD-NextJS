
import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="fundo">
          <div className="menu">
            <Link href="/">Home</Link>
            <Link href="/produto/index">CRUD</Link>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
