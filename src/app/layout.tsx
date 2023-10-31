import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ weight: ["100", "300", "700"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "Next, Front-End, React, Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
