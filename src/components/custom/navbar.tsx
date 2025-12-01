"use client";

import { Search, ShoppingCart, User, Menu, Star } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const userPoints = 1250; // Mock data

  return (
    <nav className="bg-black border-b border-[#C4FF00]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">ELETRO</span>
              <span className="bg-[#C4FF00] text-black px-2 py-1 ml-1">KA</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar peças para mobilidade elétrica..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-[#C4FF00]/30 rounded-lg pl-4 pr-12 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00] focus:ring-1 focus:ring-[#C4FF00] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C4FF00] text-black p-2 rounded-md hover:bg-[#C4FF00]/90 transition-all">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Points Badge */}
            <div className="hidden sm:flex items-center space-x-2 bg-[#C4FF00]/10 border border-[#C4FF00]/30 rounded-lg px-3 py-2">
              <Star className="w-4 h-4 text-[#C4FF00] fill-[#C4FF00]" />
              <span className="text-[#C4FF00] font-bold text-sm">{userPoints}</span>
              <span className="text-gray-400 text-xs">pontos</span>
            </div>

            {/* Cart */}
            <button className="relative p-2 text-white hover:text-[#C4FF00] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-[#C4FF00] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User */}
            <button className="p-2 text-white hover:text-[#C4FF00] transition-colors">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-white hover:text-[#C4FF00] transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar peças..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-[#C4FF00]/30 rounded-lg pl-4 pr-12 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C4FF00] text-black p-2 rounded-md">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-t border-[#C4FF00]/20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 py-3 overflow-x-auto scrollbar-hide">
            {["Baterias", "Motores", "Controladores", "Freios", "Pneus", "Acessórios"].map((cat) => (
              <button
                key={cat}
                className="text-sm text-gray-300 hover:text-[#C4FF00] whitespace-nowrap transition-colors font-medium"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
