import { Inter } from "next/font/google";
import "./globals.css";
import ToggleSwitch from "@/components/ToggleSwitch";
import ThemeHandler from "./ThemeHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Problems",
  description: "3 Personal Finance Problems in 21st-Century",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#22003D] bg-white`}>
        <main>{children}</main>
        <ThemeHandler />
        <ToggleSwitch />
      </body>
    </html>
  );
}
