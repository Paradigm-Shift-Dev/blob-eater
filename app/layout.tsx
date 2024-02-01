import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOB EATER",
  description: "BLOB EATER's purpose is to feed on old blobs (mp3 files) from the AI Avatars: MARI & MIRA. BLOB EATER's role is to balance our overall digital footprint and maintain system-harmony.",
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
