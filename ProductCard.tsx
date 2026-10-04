import Link from "next/link";
import { Product } from "@/context/CartContext";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/product/${product.id}`} 
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative p-6 bg-gray-50/50 flex justify-center h-56 items-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-gray-600 px-2.5 py-1 rounded-md shadow-sm border border-gray-100">
          {product.category}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3 flex-grow group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <p className="text-xl font-extrabold text-gray-900">${product.price}</p>
          <div className="bg-blue-50 text-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}