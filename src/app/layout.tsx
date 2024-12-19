import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "League Of Legends",
  description: "리그오브레전드에 오신걸 환영합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-black `}>
        <header>
          <div className="w-full h-10  text-white flex items-center justify-evenly	bg-gray-800	">
            <Link className="text-white	" href={"/"}>
              홈
            </Link>
            <Link className="text-white" href={"/champions"}>
              챔피언
            </Link>
            <Link className="text-white" href={"/items"}>
              아이템
            </Link>
            <Link className="text-white" href={"/rotation"}>
              무료챔피언
            </Link>
          </div>
        </header>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
