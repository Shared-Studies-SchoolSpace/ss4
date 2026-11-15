import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Microsoft – AI, Cloud, Productivity, Gaming & Apps (SS4 Varsity Edition)",
  description: "Explore Microsoft products and services transformed with the SS4 Varsity Design System.",
  icons: {
    icon: "/favicon.ico",
  },
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
