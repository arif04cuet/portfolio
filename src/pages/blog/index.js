import Article from '@/components/Article'
import { getAllPosts } from '@/lib/api';
import Head from 'next/head'
import React from 'react'


export async function getStaticProps() {

    const posts = getAllPosts();

    return {
        props: {
            posts,
        }
    };
}
const Blog = ({ posts }) => {

    console.log(posts);

    return (
        <>
            <Head>
                <title>Portfolio - Blog</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='my-6 px-6'>
                <div className='max-w-4xl mx-auto'>

                    <h1 className='text-3xl font-bold mb-4'>Blog</h1>

                    {
                        posts.map((post) => (

                            <Article key={post.slug} post={post} className='border-b-2'></Article>
                        ))
                    }
                </div>
            </main>

        </>
    )
}

export default Blog