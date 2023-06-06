import { getPostBySlug } from '@/lib/api';
import Head from 'next/head'
import React from 'react'
import md from 'markdown-it';

export async function getStaticProps() {

    const post = getPostBySlug('about');

    return {
        props: post,
    };

}

const AboutMe = ({ frontmatter, content }) => {

    return (
        <>
            <Head>
                <title>Portfolio - {frontmatter.title}</title>
                <meta name='description' content='About me' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='my-6 px-6'>
                <div className='max-w-5xl mx-auto'>

                    <h1 className='text-3xl font-bold'>{frontmatter.title}</h1>
                    <div className='prose'>
                        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                    </div>
                </div>
            </main>

        </>
    )
}

export default AboutMe