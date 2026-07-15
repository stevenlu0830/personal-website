import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steven Lu | Personal Website",
  description:
    "Steven Lu — Computer Science student at the University of British Columbia, specializing in the AI Option.",
};

export const viewport: Viewport = {
  themeColor: "#2b2b2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
