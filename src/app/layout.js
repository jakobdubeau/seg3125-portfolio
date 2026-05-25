import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jakob Dubeau",
  description: "My portfolio for SEG3125",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex justify-center h-screen selection:bg-indigo-300 bg-black">
          <div className="flex flex-col gap-4 w-full md:max-w-125 md:mt-22">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
