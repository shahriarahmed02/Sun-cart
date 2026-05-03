import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Grab your summer sunshine with the best deals!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Navbar />
     
        <main className="min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}