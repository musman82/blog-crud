import Link from 'next/link';
import { blogData } from '../../data/blogData';
import React from 'react'

export default function Slug({ params }: { params: { slug: string } }) {

    const selectedBlog = blogData.find((blog) => blog.slug === params.slug);

  return (
    <section className='text-center p-10'>
        <Link href="/" className='bg-purple-500 text-white font-bold font-mono py-3 px-9 rounded-xl'>
            GO BACK TO HOME
        </Link>
        <div className='text-3xl  font-bold p-10'>Blog Title:{selectedBlog?.slug}</div>
        <div className='flex justify-center'>

        <div className='text-xl  mt-2  w-[60%]'>{selectedBlog?.content}</div>
        </div>
    </section>
  )
}