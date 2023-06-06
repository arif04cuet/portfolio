import React from 'react'
import SectionHeader from './SectionHeader'
import Article from './Article'


const HomeBlog = ({ posts }) => {

    return (
        <div className='bg-sky-50'>
            <div className='px-6'>
                <div className='max-w-5xl mx-auto py-10'>
                    <SectionHeader
                        title="Recent Posts"
                        link="/blog"
                    ></SectionHeader>

                    <div className='grid md:grid-cols-2 gap-6'>
                        {
                            posts && posts.slice(0, 2).map((post) => (
                                <Article key={post.slug} post={post}></Article>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeBlog