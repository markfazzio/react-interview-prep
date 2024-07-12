import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import ThemeContextProvider from "@/context/ThemeContext";
import "@markfazzio/docs-ui-components/docs-ui-components.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TS Interview Prep - By Mark Fazzio",
  description: "Quick TypeScript refresher cheat sheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeContextProvider>
  );
}
