import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarkdownNest: Your Next.js Markdown Blog",
  description:
    "Discover how to create your own stunning personal blog website effortlessly with MarkdownNest, a Next.js-powered platform. Dive into the world of Next.js and Markdown to craft captivating content and engage your audience like never before. Start building your dream blog today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
