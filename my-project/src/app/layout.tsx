import type { Metadata, Viewport } from "next";
import ScrollMemory from "@/components/ScrollMemory";
import SmoothAnchors from "@/components/SmoothAnchors";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steven Lu",
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
      <body className="antialiased">
        <ScrollMemory />
        <SmoothAnchors />
        {children}
      </body>
    </html>
  );
}
