import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Press_Start_2P } from "next/font/google";

const playfair = Nunito({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "HSD Hitit",
  description: "Huawei Student Developers Hitit Üniversitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${playfair.variable} ${pixel.variable} font-sans antialiased dark`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
