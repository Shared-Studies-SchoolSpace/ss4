import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SS4 — An Ecosystem for Academia | LYCEON, SCL & HanziNA",
  description:
    "SS4 connects schools, tertiary institutions, and contenders across one shared academic ecosystem: LYCEON (uniting SAS and SLM), SS4 Chess League (SCL), and HanziNA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F6F4F0] text-[#111111] font-avenir antialiased selection:bg-[#1A56C4] selection:text-white">
        {children}
      </body>
    </html>
  );
}
