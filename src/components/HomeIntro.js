import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeIntro = () => {
    return (
        <header className='my-10  px-6 '>
            <div className='flex mx-auto max-w-4xl gap-14 items-center justify-center flex-col-reverse md:flex-row'>
                <div>
                    <h1 className='text-3xl font-bold mb-6'>
                        Hi, Arif Hossain!
                        <br />
                        Full Stack Developer
                    </h1>
                    <p className='text-lg mb-6'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt nostrud amet.
                    </p>
                    <Link href='/work' className='bg-primary-500 px-3 py-2 rounded text-white text-lg hover:bg-blue-600
                    '>Check my work</Link>
                </div>
                <span className='m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:top-1.5 before:block before:absolute before:bg-primary-500 relative z-0 before:rounded-full'>
                    <Image
                        src='/profile.png'
                        width={500}
                        height={300}
                        layout='responsive'
                        className='rounded-full z-10 relative' />

                </span>
            </div>
        </header>
    )
}

export default HomeIntro