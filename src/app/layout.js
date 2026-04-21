import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import DefaultBg from "@/components/DefaultBg";

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
      <body className="min-h-full flex flex-col">
        <>
          <DefaultBg top={3}>
            <div className="fixed top-0 left-0 z-40 w-full">
              <NavBar />
            </div>
            <main className="mt-16"> {children}</main>
          </DefaultBg>
        </>
      </body>
    </html>
  );
}
