"use client";
import React, { useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    siteName: "Beyond Realms LTD",
    email: "info@beyondrealms.com",
    phone: "+1 (234) 567-890",
    address: "123 Business Avenue, Suite 100, New York, NY 10001",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    currency: "USD",
    darkMode: false,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const target = e.target as HTMLInputElement; // cast target to HTMLInputElement
  const { name, value, type, checked } = target;
  setForm({ ...form, [name]: type === "checkbox" ? checked : value });
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // future: send settings to backend
    console.log("Updated Settings:", form);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      <p className="text-gray-600 dark:text-gray-400">Manage your site settings here.</p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-2xl border dark:border-gray-700 shadow-sm">
        {/* General Settings */}
        <h3 className="text-xl font-semibold mb-4">General</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="siteName"
            value={form.siteName}
            onChange={handleChange}
            placeholder="Site Name"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Contact Email"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded-lg w-full"
          />
        </div>

        {/* Social Links */}
        <h3 className="text-xl font-semibold mt-6 mb-4">Social Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="facebook"
            value={form.facebook}
            onChange={handleChange}
            placeholder="Facebook URL"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="Instagram URL"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
            placeholder="Twitter URL"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="p-2 border rounded-lg w-full"
          />
        </div>

        {/* Additional Settings */}
        <h3 className="text-xl font-semibold mt-6 mb-4">Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="p-2 border rounded-lg w-full"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="darkMode"
              checked={form.darkMode}
              onChange={handleChange}
            />
            Enable Dark Mode
          </label>
        </div>

        {/* Security Settings */}
        <h3 className="text-xl font-semibold mt-6 mb-4">Security</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New Password"
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="p-2 border rounded-lg w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
