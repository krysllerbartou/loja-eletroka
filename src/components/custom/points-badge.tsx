"use client";

import { Star, TrendingUp } from "lucide-react";

interface PointsBadgeProps {
  points: number;
  variant?: "default" | "large" | "notification";
  showValue?: boolean;
}

export default function PointsBadge({
  points,
  variant = "default",
  showValue = true,
}: PointsBadgeProps) {
  const discountValue = (points / 100).toFixed(2);

  if (variant === "notification") {
    return (
      <div className="bg-[#C4FF00] text-black rounded-lg p-4 shadow-lg border-2 border-[#C4FF00]">
        <div className="flex items-start space-x-3">
          <div className="bg-black rounded-full p-2">
            <Star className="w-5 h-5 text-[#C4FF00] fill-[#C4FF00]" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-1">Parabéns! Você ganhou pontos!</h4>
            <p className="text-xs opacity-90">
              +{points.toString()} pontos adicionados à sua conta
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className="bg-gradient-to-br from-[#C4FF00] to-[#A0D600] text-black rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 fill-black" />
            <span className="font-bold text-lg">EletroKA Points</span>
          </div>
          <TrendingUp className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold">{points.toString()}</div>
          <div className="text-sm opacity-90">pontos disponíveis</div>
          {showValue && (
            <div className="bg-black/20 rounded-lg px-3 py-2 mt-3">
              <div className="text-xs opacity-90">Valor em desconto</div>
              <div className="text-xl font-bold">R$ {discountValue}</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center space-x-2 bg-[#C4FF00]/10 border border-[#C4FF00]/30 rounded-lg px-3 py-2">
      <Star className="w-4 h-4 text-[#C4FF00] fill-[#C4FF00]" />
      <span className="text-[#C4FF00] font-bold text-sm">{points.toString()}</span>
      <span className="text-gray-400 text-xs">pontos</span>
    </div>
  );
}
