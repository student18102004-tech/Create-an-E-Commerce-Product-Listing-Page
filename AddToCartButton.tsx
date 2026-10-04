"use client";

import { useCart, Product } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(product)} className="flex items-center justify-center gap-2 w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
      <ShoppingCart size={20} /> Add to Cart
    </button>
  );
}