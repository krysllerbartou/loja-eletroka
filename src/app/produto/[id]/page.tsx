"use client";

import Navbar from "@/components/custom/navbar";
import PointsBadge from "@/components/custom/points-badge";
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, RotateCcw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock data
  const product = {
    id: "1",
    name: "Bateria Lítio 48V 20Ah para Scooter Elétrica",
    price: 899.90,
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    ],
    rating: 4.8,
    reviews: 127,
    seller: "TechPower Store",
    sellerRating: 4.9,
    stock: 15,
    description:
      "Bateria de lítio de alta performance para scooters elétricas. Tecnologia BMS integrada para proteção contra sobrecarga, descarga profunda e curto-circuito. Ciclo de vida de 1000+ cargas.",
    specifications: {
      Voltagem: "48V",
      Capacidade: "20Ah",
      Peso: "6.5kg",
      Dimensões: "35 x 15 x 10 cm",
      Tipo: "Lítio-íon",
      Garantia: "12 meses",
    },
  };

  const reviews = [
    {
      id: "1",
      userName: "Carlos Silva",
      rating: 5,
      comment: "Excelente bateria! Aumentou a autonomia do meu scooter em 30%.",
      date: "15/01/2025",
    },
    {
      id: "2",
      userName: "Ana Paula",
      rating: 4,
      comment: "Boa qualidade, entrega rápida. Recomendo!",
      date: "10/01/2025",
    },
    {
      id: "3",
      userName: "Roberto Lima",
      rating: 5,
      comment: "Perfeita! Instalação fácil e desempenho superior.",
      date: "05/01/2025",
    },
  ];

  const pointsToEarn = Math.floor(product.price * quantity);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          <span className="hover:text-[#C4FF00] cursor-pointer">Início</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#C4FF00] cursor-pointer">Baterias</span>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white/5 border border-[#C4FF00]/20 rounded-2xl overflow-hidden mb-4 aspect-square relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Points Badge */}
              <div className="absolute top-4 right-4 bg-[#C4FF00] text-black px-3 py-2 rounded-lg font-bold flex items-center space-x-2">
                <Star className="w-4 h-4 fill-black" />
                <span>+{pointsToEarn} pontos</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#C4FF00]"
                      : "border-[#C4FF00]/20 hover:border-[#C4FF00]/50"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>

            {/* Rating & Reviews */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-[#C4FF00] fill-[#C4FF00]" />
                <span className="text-white font-bold">{product.rating}</span>
              </div>
              <span className="text-gray-400">({product.reviews} avaliações)</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{product.stock} em estoque</span>
            </div>

            {/* Price */}
            <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6 mb-6">
              <div className="text-4xl font-bold text-[#C4FF00] mb-2">
                R$ {product.price.toFixed(2)}
              </div>
              <div className="text-gray-400 text-sm">
                ou 12x de R$ {(product.price / 12).toFixed(2)} sem juros
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-white font-medium mb-2 block">Quantidade:</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-white/10 border border-[#C4FF00]/30 text-white w-10 h-10 rounded-lg hover:bg-white/20 transition-all"
                >
                  -
                </button>
                <span className="text-white font-bold text-xl w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="bg-white/10 border border-[#C4FF00]/30 text-white w-10 h-10 rounded-lg hover:bg-white/20 transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-[#C4FF00] text-black font-bold py-4 rounded-lg hover:bg-[#C4FF00]/90 transition-all flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Adicionar ao Carrinho</span>
              </button>
              <button className="w-full border-2 border-[#C4FF00] text-[#C4FF00] font-bold py-4 rounded-lg hover:bg-[#C4FF00]/10 transition-all">
                Comprar Agora
              </button>
              <div className="flex gap-3">
                <button className="flex-1 bg-white/5 border border-[#C4FF00]/20 text-white py-3 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Favoritar</span>
                </button>
                <button className="flex-1 bg-white/5 border border-[#C4FF00]/20 text-white py-3 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 bg-white/5 border border-[#C4FF00]/20 rounded-xl p-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Shield className="w-5 h-5 text-[#C4FF00]" />
                <span>Garantia de 12 meses</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Truck className="w-5 h-5 text-[#C4FF00]" />
                <span>Frete grátis acima de R$ 200</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <RotateCcw className="w-5 h-5 text-[#C4FF00]" />
                <span>Devolução grátis em 30 dias</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="mt-6 bg-white/5 border border-[#C4FF00]/20 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Vendido por</div>
                  <div className="text-white font-bold">{product.seller}</div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-[#C4FF00] fill-[#C4FF00]" />
                    <span className="text-gray-300 text-sm">{product.sellerRating}</span>
                  </div>
                </div>
                <button className="bg-[#C4FF00] text-black font-bold px-6 py-2 rounded-lg hover:bg-[#C4FF00]/90 transition-all">
                  Ver Loja
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-[#C4FF00]/20 pt-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Description & Specs */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Descrição</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

              <h3 className="text-xl font-bold text-white mb-4">Especificações</h3>
              <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl overflow-hidden">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`flex justify-between p-4 ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    }`}
                  >
                    <span className="text-gray-400">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Avaliações ({product.reviews})
              </h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{review.userName}</span>
                      <span className="text-gray-400 text-sm">{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-[#C4FF00] fill-[#C4FF00]"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
