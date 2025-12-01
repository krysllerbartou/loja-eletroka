"use client";

import Navbar from "@/components/custom/navbar";
import PointsBadge from "@/components/custom/points-badge";
import { Star, CreditCard, MapPin, Package, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [usePoints, setUsePoints] = useState(false);
  const [pointsToUse, setPointsToUse] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Mock data
  const userPoints = 1250;
  const maxPointsDiscount = Math.floor(userPoints / 100);

  const cartItems = [
    {
      id: "1",
      name: "Bateria Lítio 48V 20Ah",
      price: 899.90,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&h=200&fit=crop",
    },
    {
      id: "2",
      name: "Motor Brushless 1000W",
      price: 549.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&h=200&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Frete grátis
  const pointsDiscount = usePoints ? pointsToUse : 0;
  const total = subtotal + shipping - pointsDiscount;
  const pointsToEarn = Math.floor(total);

  const handleFinishOrder = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right">
          <PointsBadge points={pointsToEarn} variant="notification" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white mb-8">Finalizar Compra</h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { num: 1, label: "Endereço", icon: MapPin },
              { num: 2, label: "Pagamento", icon: CreditCard },
              { num: 3, label: "Confirmação", icon: Package },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                        step >= s.num
                          ? "bg-[#C4FF00] border-[#C4FF00] text-black"
                          : "bg-white/5 border-[#C4FF00]/30 text-gray-400"
                      }`}
                    >
                      {step > s.num ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span
                      className={`text-sm mt-2 ${
                        step >= s.num ? "text-[#C4FF00]" : "text-gray-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {s.num < 3 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 ${
                        step > s.num ? "bg-[#C4FF00]" : "bg-[#C4FF00]/20"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Address */}
            {step === 1 && (
              <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="CEP"
                      className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                    />
                    <input
                      type="text"
                      placeholder="Número"
                      className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Rua"
                    className="w-full bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                  />
                  <input
                    type="text"
                    placeholder="Complemento (opcional)"
                    className="w-full bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Bairro"
                      className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                    />
                    <input
                      type="text"
                      placeholder="Cidade"
                      className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#C4FF00] text-black font-bold py-4 rounded-lg hover:bg-[#C4FF00]/90 transition-all mt-6"
                >
                  Continuar para Pagamento
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Forma de Pagamento</h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Número do Cartão"
                        className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                      />
                      <input
                        type="text"
                        placeholder="Nome no Cartão"
                        className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Validade (MM/AA)"
                        className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="bg-white/10 border border-[#C4FF00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C4FF00]"
                      />
                    </div>
                  </div>
                </div>

                {/* Points Section */}
                <div className="bg-gradient-to-br from-[#C4FF00]/10 to-transparent border border-[#C4FF00]/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-[#C4FF00] fill-[#C4FF00]" />
                      <div>
                        <h3 className="text-white font-bold">Usar EletroKA Points</h3>
                        <p className="text-gray-400 text-sm">
                          Você tem {userPoints} pontos disponíveis
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={usePoints}
                        onChange={(e) => setUsePoints(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C4FF00]"></div>
                    </label>
                  </div>

                  {usePoints && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">
                          Máximo: R$ {maxPointsDiscount.toFixed(2)}
                        </span>
                        <span className="text-[#C4FF00] font-bold">
                          100 pontos = R$ 1,00
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={maxPointsDiscount}
                        step="1"
                        value={pointsToUse}
                        onChange={(e) => setPointsToUse(Number(e.target.value))}
                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C4FF00]"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold">
                          Desconto: R$ {pointsToUse.toFixed(2)}
                        </span>
                        <span className="text-gray-400 text-sm">
                          ({pointsToUse * 100} pontos)
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-[#C4FF00] text-[#C4FF00] font-bold py-4 rounded-lg hover:bg-[#C4FF00]/10 transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#C4FF00] text-black font-bold py-4 rounded-lg hover:bg-[#C4FF00]/90 transition-all"
                  >
                    Revisar Pedido
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Revisar Pedido</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Endereço de Entrega</h3>
                    <p className="text-gray-400 text-sm">
                      Rua Exemplo, 123 - Bairro Centro
                      <br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Forma de Pagamento</h3>
                    <p className="text-gray-400 text-sm">
                      Cartão de Crédito terminado em ****1234
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-[#C4FF00] text-[#C4FF00] font-bold py-4 rounded-lg hover:bg-[#C4FF00]/10 transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleFinishOrder}
                    className="flex-1 bg-[#C4FF00] text-black font-bold py-4 rounded-lg hover:bg-[#C4FF00]/90 transition-all"
                  >
                    Finalizar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-[#C4FF00]/20">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-sm font-medium line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs">Qtd: {item.quantity}</p>
                    </div>
                    <span className="text-[#C4FF00] font-bold">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Frete</span>
                  <span className="text-[#C4FF00] font-medium">Grátis</span>
                </div>
                {usePoints && pointsDiscount > 0 && (
                  <div className="flex justify-between text-[#C4FF00]">
                    <span>Desconto (Pontos)</span>
                    <span>- R$ {pointsDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-[#C4FF00]/20 pt-3 flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#C4FF00]">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Points to Earn */}
              <div className="bg-gradient-to-br from-[#C4FF00]/10 to-transparent border border-[#C4FF00]/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-[#C4FF00] fill-[#C4FF00]" />
                    <span className="text-white font-medium">Você vai ganhar</span>
                  </div>
                  <span className="text-[#C4FF00] font-bold text-lg">
                    +{pointsToEarn} pontos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
