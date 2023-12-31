"use client";
import { BlogType } from "@/types/commonTypes";
import { BlogModalProps } from "@/types/componentsTypes";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const BlogModal = ({
  isOpen,
  onClose,
  onAddBlog,
  onUpdateBlog,
  Blog,
}: BlogModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  const handleUpdateBlog = () => {
    const updateBlog: BlogType = {
      id: Blog.id,
      title: title || Blog.title,
      slug: slug || Blog.slug,
      content: content || Blog.content,
      picture: picture || Blog.picture,
    };

    onUpdateBlog(updateBlog);
    setTitle("");
    setSlug("");
    setContent("");
    setPicture("");
    onClose();
  };

  const handleAddBlog = () => {
    // You can add validation logic here before adding the Blog
    const newBlog: BlogType = {
      id: `${Date.now()}`,
      title,
      slug,
      content,
      picture,
    };

    setTitle("");
    setSlug("");
    setContent("");
    setPicture("");
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
        <div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg">
          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold mb-2">Add Blog</h3>
              <button onClick={onClose}>
                <FaTimes className="text-3xl text-red-500 hover:text-gray-700 cursor-pointer" />
              </button>
            </div>

            <label className="block text-gray-600 text-sm mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title || Blog.title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 mb-2"
            />

            <label className="block text-gray-600 text-sm mb-2" htmlFor="Slug">
              Slug
            </label>

            <input
              type="text"
              id="slug"
              value={slug || Blog.slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border p-2 mb-2"
            />

            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              id="content"
              rows={10}
              value={content || Blog.content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border p-2 mb-2"
            />

            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="picture"
            >
              Picture
            </label>
            <input
              type="text"
              id="picture"
              value={picture || Blog.picture}
              onChange={(e) => setPicture(e.target.value)}
              className="w-full border p-2 mb-4"
            />
          </div>

          <div className="flex justify-end">
            {Blog.id !== "" ? (
              <button
                onClick={handleUpdateBlog}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                update Blog
              </button>
            ) : (
              <button
                onClick={handleAddBlog}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Blog
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
