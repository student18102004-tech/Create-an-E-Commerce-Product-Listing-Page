import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern E-Commerce",
  description: "Product listing page with SSR, Search, and Cart",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}