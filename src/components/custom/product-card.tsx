"use client";

import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  seller: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  seller,
}: ProductCardProps) {
  const pointsToEarn = Math.floor(price);

  return (
    <Link href={`/produto/${id}`}>
      <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl overflow-hidden hover:border-[#C4FF00] hover:shadow-lg hover:shadow-[#C4FF00]/20 transition-all duration-300 group h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square bg-white/10 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Points Badge */}
          <div className="absolute top-2 right-2 bg-[#C4FF00] text-black px-2 py-1 rounded-md text-xs font-bold flex items-center space-x-1">
            <Star className="w-3 h-3 fill-black" />
            <span>+{pointsToEarn}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-white font-medium text-sm mb-2 line-clamp-2 group-hover:text-[#C4FF00] transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <Star className="w-4 h-4 text-[#C4FF00] fill-[#C4FF00]" />
            <span className="text-white text-sm font-medium">{rating}</span>
            <span className="text-gray-400 text-xs">({reviews})</span>
          </div>

          {/* Seller */}
          <p className="text-gray-400 text-xs mb-3">{seller}</p>

          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-baseline space-x-1 mb-3">
              <span className="text-2xl font-bold text-[#C4FF00]">
                R$ {price.toFixed(2)}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-[#C4FF00] text-black font-bold py-2.5 rounded-lg hover:bg-[#C4FF00]/90 transition-all flex items-center justify-center space-x-2 group-hover:scale-105">
              <ShoppingCart className="w-4 h-4" />
              <span>Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
