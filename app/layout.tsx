import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAINT-AI | Maintenance Assistant",
  description:
    "An AI-powered, source-referenced maintenance troubleshooting assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}