"use client";

import Navbar from "@/components/custom/navbar";
import ProductCard from "@/components/custom/product-card";
import PointsBadge from "@/components/custom/points-badge";
import { Battery, Zap, Settings, Shield, TrendingUp, Star } from "lucide-react";

export default function Home() {
  // Mock data - produtos
  const featuredProducts = [
    {
      id: "1",
      name: "Bateria Lítio 48V 20Ah para Scooter Elétrica",
      price: 899.90,
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 127,
      seller: "TechPower Store",
    },
    {
      id: "2",
      name: "Motor Brushless 1000W para Patinete Elétrico",
      price: 549.00,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      seller: "MotorMax",
    },
    {
      id: "3",
      name: "Controlador Inteligente 48V 30A com Display LCD",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      seller: "EletroControl",
    },
    {
      id: "4",
      name: "Kit Freio a Disco Hidráulico para E-Bike",
      price: 379.00,
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 94,
      seller: "BrakeTech",
    },
    {
      id: "5",
      name: "Pneu Anti-Furo 10 Polegadas para Scooter",
      price: 189.90,
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 203,
      seller: "TirePro",
    },
    {
      id: "6",
      name: "Carregador Rápido 48V 5A com Proteção",
      price: 159.00,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 178,
      seller: "ChargeMax",
    },
    {
      id: "7",
      name: "Display Digital Multifuncional para E-Bike",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 112,
      seller: "DisplayTech",
    },
    {
      id: "8",
      name: "Suspensão Dianteira Ajustável para Patinete",
      price: 429.00,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 67,
      seller: "SuspensionPro",
    },
  ];

  const categories = [
    { name: "Baterias", icon: Battery, count: 234 },
    { name: "Motores", icon: Zap, count: 189 },
    { name: "Controladores", icon: Settings, count: 156 },
    { name: "Freios", icon: Shield, count: 143 },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-black to-[#C4FF00]/10 border-b border-[#C4FF00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#C4FF00]/10 border border-[#C4FF00]/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-[#C4FF00]" />
                <span className="text-[#C4FF00] text-sm font-medium">
                  Ganhe pontos em cada compra!
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Peças para
                <span className="text-[#C4FF00]"> Mobilidade Elétrica</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Encontre as melhores peças e acessórios para seu veículo elétrico.
                Qualidade garantida e entrega rápida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#C4FF00] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#C4FF00]/90 transition-all hover:scale-105">
                  Explorar Produtos
                </button>
                <button className="border-2 border-[#C4FF00] text-[#C4FF00] font-bold px-8 py-4 rounded-lg hover:bg-[#C4FF00]/10 transition-all">
                  Vender no EletroKA
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <PointsBadge points={1250} variant="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-[#C4FF00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-white mb-6">Categorias Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6 hover:border-[#C4FF00] hover:bg-white/10 transition-all group"
                >
                  <Icon className="w-8 h-8 text-[#C4FF00] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-1">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} produtos</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Produtos em Destaque
            </h2>
            <button className="text-[#C4FF00] hover:text-[#C4FF00]/80 font-medium text-sm sm:text-base">
              Ver todos →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Points Program Banner */}
      <section className="border-y border-[#C4FF00]/20 bg-gradient-to-r from-[#C4FF00]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-8 h-8 text-[#C4FF00] fill-[#C4FF00]" />
                <h2 className="text-3xl font-bold text-white">EletroKA Points</h2>
              </div>
              <p className="text-gray-400 text-lg mb-4">
                Ganhe 1 ponto a cada R$ 1,00 em compras. Troque 100 pontos por R$ 1,00
                de desconto!
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C4FF00] rounded-full"></div>
                  <span>Acumule pontos em todas as compras</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C4FF00] rounded-full"></div>
                  <span>Use seus pontos no carrinho</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C4FF00] rounded-full"></div>
                  <span>Sem data de validade</span>
                </li>
              </ul>
            </div>
            <div className="bg-black border-2 border-[#C4FF00] rounded-2xl p-8 text-center">
              <div className="text-[#C4FF00] text-5xl font-bold mb-2">1:1</div>
              <div className="text-white text-sm">R$ 1,00 = 1 ponto</div>
              <div className="border-t border-[#C4FF00]/30 my-4"></div>
              <div className="text-[#C4FF00] text-5xl font-bold mb-2">100:1</div>
              <div className="text-white text-sm">100 pontos = R$ 1,00</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#C4FF00]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 EletroKA Marketplace. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
