"use client";
import { useState } from "react";
import { BiCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BlogType } from "@/types/commonTypes";
import BlogModal from "@/app/components/blogModal/blogModal";
import { blogData } from "@/app/data/blogData";
const BlogList = () => {
  const [Blogs, setBlogs] = useState<BlogType[]>(blogData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Blog, setBlog] = useState<BlogType>({
    id: "",
    title: "",
    slug: "",
    content: "",
    picture: "",
  });

  const onAddBlog = (Blog: BlogType) => {
    setBlogs([...Blogs, Blog]);
  };
  const onClose = () => {
    setIsOpen(false);
    setBlog({
      id: "",
      title: "",
      slug: "",
      content: "",
      picture: "",
    });
  };

  const onUpdateBlog = (BlogRecord: BlogType) => {
    console.log(BlogRecord);
    setBlogs(Blogs.map((e) => (e.id === BlogRecord.id ? BlogRecord : e)));
    setBlog({
      id: "",
      title: "",
      slug: "",
      content: "",
      picture: "",
    });
  };

  const onDeleteHandler = (Blog: BlogType) => {
    const filterdBlogs: BlogType[] = Blogs.filter((e) => e.id !== Blog.id);
    setBlogs(filterdBlogs);
  };

  const onEditHandler = (Blog: BlogType) => {
    setBlog(Blog);
    setIsOpen(true);
  };
  return (
    <div className="m-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Blog List</h2>
        <button
          className="flex justify-center items-center mb-2 bg-green-500 rounded p-1"
          onClick={() => setIsOpen(true)}
        >
          {/* <MdAddChart /> */}
          Add Blog
        </button>
      </div>

      <BlogModal
        Blog={Blog}
        isOpen={isOpen}
        onClose={onClose}
        onAddBlog={onAddBlog}
        onUpdateBlog={onUpdateBlog}
      />

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Slug</th>
            <th className="py-2 px-4 border-b">Content</th>
            <th className="py-2 px-4 border-b">Picture</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Blogs.length > 0 ? (
            Blogs.map((Blog) => (
              <tr key={Blog.title} className="hover:bg-gray-50 text-center">
                <td className="py-2 px-4 border-b">{Blog.title}</td>
                <td className="py-2 px-4 border-b">{Blog.slug}</td>
                <td className="py-2 px-4 border-b">{Blog.content}</td>
                <td className="py-2 px-4 border-b">{Blog.picture}</td>
                <td className="flex justify-center py-2 px-4 border-b">
                  <button
                    onClick={() => onEditHandler(Blog)}
                    className="flex mr-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    {" "}
                    <BiCommentEdit className="mt-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteHandler(Blog)}
                    className="flex ml-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    <MdDeleteForever className="mt-1" /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No Blog Found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
