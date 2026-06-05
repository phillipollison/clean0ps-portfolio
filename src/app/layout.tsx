import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phillip Ollison | Data Engineering Portfolio",
  description:
    "A modern data portfolio featuring Clean0ps, a data cleaning, validation, automation, and DuckDB warehouse project.",
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
