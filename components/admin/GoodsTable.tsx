"use client";
import React from "react";

export default function GoodsTable({
  goods,
  onDelete,
}: {
  goods: any[];
  onDelete: (id: number) => void;
}) {
  return (
    <div className="p-6 bg-white border rounded-2xl shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
        Current Goods
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b dark:border-gray-700">
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Discount</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Status</th>
              <th className="p-2">Promo</th>
              <th className="p-2">Tags</th>
              <th className="p-2 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {goods.map((good) => {
              const finalPrice = good.discount
                ? (good.price - good.price * (good.discount / 100)).toFixed(2)
                : good.price;

              return (
                <tr
                  key={good.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/30 dark:border-gray-700"
                >
                  <td className="p-2">
                    <img
                      src={good.image || "/placeholder.png"}
                      alt={good.name}
                      className="object-cover w-12 h-12 rounded"
                    />
                  </td>
                  <td className="p-2 font-medium text-gray-800 dark:text-gray-100">
                    {good.name}
                  </td>
                  <td className="p-2 text-gray-600 dark:text-gray-400">
                    {good.category}
                  </td>
                  <td className="p-2 text-gray-800 dark:text-gray-300">
                    ${finalPrice}
                  </td>
                  <td className="p-2 text-gray-600 dark:text-gray-400">
                    {good.discount ? `${good.discount}%` : "-"}
                  </td>
                  <td className="p-2 text-gray-800 dark:text-gray-300">
                    {good.stock || 0}
                  </td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-lg font-medium ${
                        good.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : good.status === "Out of Stock"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {good.status}
                    </span>
                  </td>
                  <td className="p-2 text-gray-600 dark:text-gray-400">
                    {good.promoCode || "-"}
                  </td>
                  <td className="p-2 text-gray-600 dark:text-gray-400">
                    {Array.isArray(good.tags)
                      ? good.tags.join(", ")
                      : good.tags || "-"}
                  </td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => onDelete(good.id)}
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {goods.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No products yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
