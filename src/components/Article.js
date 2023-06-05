import Link from 'next/link'
import React from 'react'

const Article = ({ post, className = "rounded-lg" }) => {


    return (
        <article className={`bg-white p-4 ${className}`}>
            <h3 className='text-2xl font-medium mb-2'>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <span className='text-gray-500 mb-4 block'>
                <date>{post.date}</date> | {post.tags.map((tag) => tag).join(',')}
            </span>
            <p className=''>
                {post.description}
            </p>
        </article>
    )
}

export default Article