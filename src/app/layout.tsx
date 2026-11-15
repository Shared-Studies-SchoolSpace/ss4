import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SS4 — An Ecosystem for Academia | Many Institutions, One Space",
  description: "SS4: An Ecosystem for Academia. Many Institutions, One Space. Connecting secondary schools, colleges, direct admissions, and student communities across Nigeria.",
  icons: {
    icon: "/images/ss4_logo.jpg",
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
