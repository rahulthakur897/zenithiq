import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "components";
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
  title: "Zenithiq",
  description: "Your Trusted Partner for Professional Consulting and IT Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
