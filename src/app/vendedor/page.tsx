"use client";

import Navbar from "@/components/custom/navbar";
import { Package, DollarSign, TrendingUp, Eye, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState<"produtos" | "pedidos">("produtos");

  // Mock data
  const stats = {
    totalProducts: 24,
    totalSales: 15680.50,
    totalOrders: 89,
    views: 3420,
  };

  const products = [
    {
      id: "1",
      name: "Bateria Lítio 48V 20Ah",
      price: 899.90,
      stock: 15,
      sales: 34,
      status: "active",
    },
    {
      id: "2",
      name: "Motor Brushless 1000W",
      price: 549.00,
      stock: 8,
      sales: 21,
      status: "active",
    },
    {
      id: "3",
      name: "Controlador 48V 30A",
      price: 299.90,
      stock: 0,
      sales: 15,
      status: "inactive",
    },
  ];

  const orders = [
    {
      id: "#12345",
      customer: "Carlos Silva",
      product: "Bateria Lítio 48V 20Ah",
      value: 899.90,
      status: "processing",
      date: "20/01/2025",
    },
    {
      id: "#12344",
      customer: "Ana Paula",
      product: "Motor Brushless 1000W",
      value: 549.00,
      status: "shipped",
      date: "19/01/2025",
    },
    {
      id: "#12343",
      customer: "Roberto Lima",
      product: "Controlador 48V 30A",
      value: 299.90,
      status: "delivered",
      date: "18/01/2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "delivered":
        return "text-green-400 bg-green-400/10";
      case "processing":
        return "text-yellow-400 bg-yellow-400/10";
      case "shipped":
        return "text-blue-400 bg-blue-400/10";
      case "inactive":
        return "text-red-400 bg-red-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      active: "Ativo",
      inactive: "Inativo",
      processing: "Processando",
      shipped: "Enviado",
      delivered: "Entregue",
    };
    return statusMap[status] || status;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Painel do Vendedor</h1>
          <p className="text-gray-400">Gerencie seus produtos e pedidos</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-[#C4FF00]" />
              <span className="text-2xl font-bold text-white">{stats.totalProducts}</span>
            </div>
            <p className="text-gray-400 text-sm">Produtos Ativos</p>
          </div>

          <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-[#C4FF00]" />
              <span className="text-2xl font-bold text-white">
                R$ {stats.totalSales.toFixed(2)}
              </span>
            </div>
            <p className="text-gray-400 text-sm">Vendas Totais</p>
          </div>

          <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-[#C4FF00]" />
              <span className="text-2xl font-bold text-white">{stats.totalOrders}</span>
            </div>
            <p className="text-gray-400 text-sm">Pedidos</p>
          </div>

          <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Eye className="w-8 h-8 text-[#C4FF00]" />
              <span className="text-2xl font-bold text-white">{stats.views}</span>
            </div>
            <p className="text-gray-400 text-sm">Visualizações</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-4 mb-6 border-b border-[#C4FF00]/20">
          <button
            onClick={() => setActiveTab("produtos")}
            className={`pb-4 px-2 font-medium transition-all ${
              activeTab === "produtos"
                ? "text-[#C4FF00] border-b-2 border-[#C4FF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Meus Produtos
          </button>
          <button
            onClick={() => setActiveTab("pedidos")}
            className={`pb-4 px-2 font-medium transition-all ${
              activeTab === "pedidos"
                ? "text-[#C4FF00] border-b-2 border-[#C4FF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Pedidos
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === "produtos" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Produtos Cadastrados</h2>
              <button className="bg-[#C4FF00] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#C4FF00]/90 transition-all flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Novo Produto</span>
              </button>
            </div>

            <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left text-gray-400 font-medium p-4">Produto</th>
                      <th className="text-left text-gray-400 font-medium p-4">Preço</th>
                      <th className="text-left text-gray-400 font-medium p-4">Estoque</th>
                      <th className="text-left text-gray-400 font-medium p-4">Vendas</th>
                      <th className="text-left text-gray-400 font-medium p-4">Status</th>
                      <th className="text-left text-gray-400 font-medium p-4">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-t border-[#C4FF00]/10">
                        <td className="p-4 text-white font-medium">{product.name}</td>
                        <td className="p-4 text-[#C4FF00] font-bold">
                          R$ {product.price.toFixed(2)}
                        </td>
                        <td className="p-4 text-white">{product.stock}</td>
                        <td className="p-4 text-white">{product.sales}</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              product.status
                            )}`}
                          >
                            {getStatusText(product.status)}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-[#C4FF00] hover:bg-[#C4FF00]/10 rounded-lg transition-all">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "pedidos" && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Pedidos Recentes</h2>

            <div className="bg-white/5 border border-[#C4FF00]/20 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left text-gray-400 font-medium p-4">Pedido</th>
                      <th className="text-left text-gray-400 font-medium p-4">Cliente</th>
                      <th className="text-left text-gray-400 font-medium p-4">Produto</th>
                      <th className="text-left text-gray-400 font-medium p-4">Valor</th>
                      <th className="text-left text-gray-400 font-medium p-4">Status</th>
                      <th className="text-left text-gray-400 font-medium p-4">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-[#C4FF00]/10">
                        <td className="p-4 text-[#C4FF00] font-bold">{order.id}</td>
                        <td className="p-4 text-white">{order.customer}</td>
                        <td className="p-4 text-gray-300">{order.product}</td>
                        <td className="p-4 text-white font-bold">
                          R$ {order.value.toFixed(2)}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {getStatusText(order.status)}
                          </span>
                        </td>
                        <td className="p-4 text-gray-400">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
