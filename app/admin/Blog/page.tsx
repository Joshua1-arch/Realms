"use client";
import React, { useState } from "react";

export default function BlogAdminPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
    status: "draft",
  });
  const [preview, setPreview] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setForm({ ...form, image: reader.result as string }); // store Base64 for now
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const newBlog = { id: Date.now(), ...form };
    setBlogs([newBlog, ...blogs]);
    setForm({ title: "", category: "", content: "", image: "", status: "draft" });
    setPreview("");
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>

      {/* Add Blog Form */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-md dark:bg-gray-900">
        <h3 className="text-xl font-semibold mb-4">Add New Blog Post</h3>
        <form onSubmit={handleAddBlog} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <textarea
            name="content"
            placeholder="Write your content here..."
            value={form.content}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg h-40"
            required
          />

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Upload Featured Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-full h-48 object-cover rounded-lg border"
              />
            )}
          </div>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Blog
          </button>
        </form>
      </div>

      {/* Blog Table */}
      <div className="bg-white rounded-xl shadow-md dark:bg-gray-900 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Image</th>
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Status</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length ? (
              blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/30"
                >
                  <td className="p-2">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No image</span>
                    )}
                  </td>
                  <td className="p-2">{blog.title}</td>
                  <td className="p-2">{blog.category}</td>
                  <td className="p-2 capitalize">{blog.status}</td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No blog posts yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
