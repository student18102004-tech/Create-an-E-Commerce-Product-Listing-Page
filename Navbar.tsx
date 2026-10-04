"use client";

import Link from "next/link";
import { ShoppingCart, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-gray-900 group">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
            <Store size={24} />
          </div>
          MyStore
        </Link>
        
        <Link 
          href="/cart" 
          className="relative flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
        >
          <ShoppingCart size={20} />
          <span className="font-semibold text-sm">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}