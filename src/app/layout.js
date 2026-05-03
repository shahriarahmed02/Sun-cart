import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css"; // Animation এর জন্য
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast"; // নোটিফিকেশনের জন্য

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Grab your summer sunshine with the best deals!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade"> {/* DaisyUI সামার থিম */}
      <body className={inter.className}>
        {/* টোস্ট নোটিফিকেশন */}
        <Toaster position="top-center" />
        
        {/* নেভিগেশন বার */}
        <Navbar />
        
        {/* মেইন কন্টেন্ট এলাকা (মিনিমাম হাইট দেওয়া হয়েছে যাতে ফুটার নিচে থাকে) */}
        <main className="min-h-[calc(100vh-284px)]">
          {children}
        </main>
        
        {/* ফুটার */}
        <Footer />
      </body>
    </html>
  );
}