"use client";
import React, { useState } from "react";

export default function AddGoodsForm({
  onAddGood,
}: {
  onAddGood: (good: any) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    discount: "",
    promoCode: "",
    stock: "",
    description: "",
    tags: "",
    status: "Active",
    image: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const previewURL = URL.createObjectURL(selectedFile);
      setForm({ ...form, image: previewURL });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.price) return;

    const productData = {
      ...form,
      file,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((t) => t.length > 0),
    };

    onAddGood(productData);

    setForm({
      name: "",
      category: "",
      price: "",
      discount: "",
      promoCode: "",
      stock: "",
      description: "",
      tags: "",
      status: "Active",
      image: "",
    });
    setFile(null);
  };

  return (
    <div className="p-6 bg-white border rounded-2xl shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select Category</option>
          <option value="Fashion">Fashion & Beauty</option>
          <option value="Agriculture">Agriculture & Food Tech</option>
          <option value="Trade">Trade & Logistics</option>
          <option value="Consulting">Business Consulting</option>
        </select>

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        {/* Discount */}
        <input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          value={form.discount}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        {/* Promo Code */}
        <input
          type="text"
          name="promoCode"
          placeholder="Promo Code (optional)"
          value={form.promoCode}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        {/* Stock */}
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Product Description..."
          value={form.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded-lg resize-none"
        />

        {/* Tags */}
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated, e.g., organic,eco-friendly)"
          value={form.tags}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        {/* Status */}
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={form.image && !file ? form.image : ""}
          onChange={(e) => {
            setFile(null);
            handleChange(e);
          }}
          className="w-full p-2 border rounded-lg"
        />

        {/* OR Upload File */}
        <div>
          <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
            Upload Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          />
        </div>

        {/* Preview */}
        {form.image && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Preview:
            </p>
            <img
              src={form.image}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
