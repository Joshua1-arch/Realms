"use client";
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Customer" | "Manager";
  status: "Active" | "Inactive";
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Customer", status: "Inactive" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", role: "Manager", status: "Active" },
  ]);

  const [search, setSearch] = useState("");

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const filteredUsers = users.filter(
    u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Users</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 p-2 border rounded-lg"
        />
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 border rounded-2xl shadow-sm dark:border-gray-700">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b dark:border-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/30 dark:border-gray-700">
                <td className="p-2 font-medium text-gray-800 dark:text-gray-100">{user.name}</td>
                <td className="p-2 text-gray-600 dark:text-gray-400">{user.email}</td>
                <td className="p-2 text-gray-600 dark:text-gray-400">{user.role}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 text-xs rounded-lg font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-2 text-right space-x-2">
                  <button
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    // future: handle edit
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500 dark:text-gray-400">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
