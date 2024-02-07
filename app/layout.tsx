import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/Sidebar";
import {cn} from "@/libs/utils";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio web",
  description: "Portafolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn('bg-negro text-white h-full',font.className)}>
        <Sidebar />
        <main className="pl-[14vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
