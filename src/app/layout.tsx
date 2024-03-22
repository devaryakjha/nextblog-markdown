import "./globals.css";
import font from "@/lib/fonts";
import { metadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.variable)}>{children}</body>
    </html>
  );
}
