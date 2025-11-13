"use client";
import React, { useState } from "react";
import AddGoodsForm from "@/components/admin/AddGoodsForm";
import GoodsTable from "@/components/admin/GoodsTable"

export default function GoodsPage() {
  const [goods, setGoods] = useState([
    {
      id: 1,
      name: "Organic Shea Butter",
      category: "Beauty",
      price: 15.99,
      image: "/images/shea-butter.jpg",
    },
    {
      id: 2,
      name: "Men’s Classic Suit",
      category: "Fashion",
      price: 120.0,
      image: "/images/mens-suit.jpg",
    },
  ]);

  // Add new good
  const handleAddGood = (newGood: any) => {
    setGoods([...goods, { ...newGood, id: Date.now() }]);
  };

  // Delete a good
  const handleDeleteGood = (id: number) => {
    setGoods(goods.filter((good) => good.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Manage Goods</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <AddGoodsForm onAddGood={handleAddGood} />
        <GoodsTable goods={goods} onDelete={handleDeleteGood} />
      </div>
    </div>
  );
}
