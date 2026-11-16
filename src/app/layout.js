import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Play Store",
  description: "This is a application management website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">

        <Navbar></Navbar>

        <main className="pt-[66px]">
          {children}
        </main>

        <div className="p-6 bg-base-200 mt-20 text-2xl">Footer</div>
       
      </body>
    </html>
  );
}
