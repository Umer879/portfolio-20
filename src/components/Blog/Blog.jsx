'use client'
import React from 'react'
const myBlog = [
    {
        id: 1,
        image: '/assets/blog/img-1.avif',
        field: 'UI/UX',
        time: '3 min read',
        title: 'Designing for Better User Experience',
        authorImg: '/assets/photo/profile.avif',
        authorName: 'Umer Gull',
        publishDate: 'June 11, 2025'
    },
    {
        id: 2,
        image: '/assets/blog/img-2.avif',
        field: 'Frontend',
        time: '5 min read',
        title: 'Mastering Tailwind CSS in Projects',
        authorImg: '/assets/photo/profile.avif',
        authorName: 'Umer Gull',
        publishDate: 'Feb 05, 2025'
    },
    {
        id: 3,
        image: '/assets/blog/img-3.avif',
        field: 'JavaScript',
        time: '4 min read',
        title: 'Understanding Closures in JavaScript',
        authorImg: '/assets/photo/profile.avif',
        authorName: 'Umer Gull',
        publishDate: 'May 14, 2025'
    },
    {
        id: 4,
        image: '/assets/blog/img-4.avif',
        field: 'JavaScript',
        time: '4 min read',
        title: 'Understanding Closures in JavaScript',
        authorImg: '/assets/photo/profile.avif',
        authorName: 'Umer Gull',
        publishDate: 'Aug 20, 2025'
    }
];
const Blog = () => {
    return (
        <section className='Blog' id='blog'>
            <p className="flex">
                <span className="me-2">
                    <img src="/assets/icon/icon-1.avif" alt="" />
                </span>{' '}
                Our Blog
            </p>
            <h1 className="font-semibold text-6xl mt-2">Our Latest Blog Idea</h1>
            <h2 className="font-semibold text-6xl ms-12 my-4">
                UI/UX <span className="italic text-[#FFAE00] underline">Trends</span>
            </h2>

            <section className="py-10 px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {myBlog.map((blog) => (
                        <div key={blog.id} className=" blog-container rounded  overflow-hidden  transition-all">
                            <img src={blog.image} alt="Blog" className="w-full h-52 object-cover" />
                            <div className="p-5">
                                <div className="flex justify-between text-[12px]  mb-2">
                                    <span>{blog.field}</span>
                                    <span>{blog.time}</span>
                                </div>
                                <h3 className="text-[16px] font-semibold mb-4">{blog.title}</h3>
                                <div className="flex items-center gap-3  pt-4">
                                    <img src={blog.authorImg} alt="Author" className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-[12px] font-medium">{blog.authorName}</p>
                                        <p className="text-[12px] text-gray-500">{blog.publishDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </section>
    )
}

export default Blog
