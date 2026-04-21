import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Badsha.dev | Full Stack MERN Developer",
  description: "Portfolio of Chan Badsha Bhuiyan - React & Next.js Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
