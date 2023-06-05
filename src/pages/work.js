import FeaturedWork from '@/components/FeaturedWork'
import { allWorks } from '@/lib/api';
import Head from 'next/head'
import React from 'react'


export async function getStaticProps() {

    const works = allWorks();

    return {
        props: {
            works
        }
    };
}

const Work = ({ works }) => {

    return (
        <>
            <Head>
                <title>Portfolio - Work</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='my-6 px-6'>
                <div className='max-w-4xl mx-auto'>

                    <h1 className='text-3xl font-bold'>Work</h1>

                    {works && works.map((work) => (

                        <FeaturedWork key={work.title} work={work}></FeaturedWork>
                    ))}

                </div>
            </main>

        </>
    )
}

export default Work