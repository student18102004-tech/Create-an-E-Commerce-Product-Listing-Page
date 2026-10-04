"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  // Empty Cart State
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-6">
          <ShoppingBag size={48} className="text-gray-400" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Let's change that!</p>
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="lg:w-2/3 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-gray-50 p-2 rounded-xl">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mix-blend-multiply" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">Quantity: {item.quantity}</p>
                <p className="font-bold text-blue-600 mt-1">${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2.5 rounded-full transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}