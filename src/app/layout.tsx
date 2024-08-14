import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WithReactQuery from "./components/react-query-wrapper";
import { Toaster } from "@/components/ui/toaster";

import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DVT StoreFront",
  description:
    "Nice little fake store for DVT technical test, by yours truly, Grish!",
  icons: "/dvt.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <WithReactQuery>
          <section className="min-h-dvh">{children}</section>
          <Toaster />
        </WithReactQuery>
      </body>
    </html>
  );
}
