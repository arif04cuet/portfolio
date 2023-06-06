import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeIntro = () => {
    return (
        <header className='my-10  px-6 '>
            <div className='flex mx-auto max-w-5xl gap-14 items-start justify-center flex-col-reverse md:flex-row'>
                <div>
                    <h1 className='text-3xl font-bold mb-6'>
                        Hi, I'm Arif Hossain!
                        <br />
                        Full Stack Developer
                    </h1>


                    <ul className='italic text-lg mb-6'>
                        <li>- Saas Based Application Development with Laravel, FilamentPHP, Octobercms, Symfony.</li>
                        <li>- eCommerce Store Design & Development with Woocomerce and Magento 2.</li>
                        <li>- API Development with Laravel, Salon, Postman. </li>
                        <li>- Custom Website/Blog development with Laravel, OctoberCMS, Reactjs, Nextjs, and TailwindCss.</li>
                    </ul>


                </div>
                <span className='w-full md:w-1/5 inline-block before:w-full before:aspect-square before:-left-1.5 before:top-1.5 before:block before:absolute before:bg-primary-500 relative z-0 before:rounded-full'>
                    <Image
                        src='/profile.png'
                        width={500}
                        height={300}
                        layout='responsive'
                        className='rounded-full z-10 relative' />

                </span>
            </div>

            <div className='max-w-5xl mx-auto mt-10 flex justify-between items-center flex-col gap-8 md:flex-row'>

                <Link href='/work'
                    className='bg-primary-500 px-3 py-2 rounded text-white text-lg hover:bg-blue-600'>
                    Check my work
                </Link>
                <div className='flex justify-between items-center h-12 gap-4'>
                    <a href="mailto:arif04cuet@gmail.com" title="Contact me to arif04cuet@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 0 24 24" class="text-teal-500 fill-current "><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/arif04cuet/" target='__blank' title="Linked in Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="4 4 40 40" class="text-teal-500 fill-current ">
                            <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="#007BB5"></path>
                        </svg>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01f852d1ca85435750" title="Hire me on UpWork">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 5 120 45"><path d="M76.082 21.118c-4.79.023-8.692 3.96-8.67 8.862s3.963 8.802 8.753 8.78 8.693-3.96 8.67-8.86-3.963-8.803-8.755-8.78zm.066 14.047c-1.358.008-2.663-.525-3.628-1.48s-1.5-2.256-1.515-3.614.525-2.663 1.48-3.628 2.256-1.5 3.614-1.515 2.663.525 3.628 1.48 1.5 2.256 1.515 3.614c.014 2.725-2.37 5.13-5.094 5.144zm19.34-9.892c-2.505.012-4.456 2.09-4.444 4.595l.04 8.385-3.812.018-.077-16.663 3.812-.018.013 2.613s1.62-2.62 4.888-2.635l1.09-.006.018 3.702zM57.462 21.75l2.886 11.422 2.996-11.45 3.812-.017L62.44 38.4l-3.702.017-2.994-11.638-2.886 11.665-3.703.017-4.978-16.64 3.702-.017 3.32 11.42 2.67-11.448zm50.675 7.386c2.605-1.536 4.445-4.377 4.43-7.644l-3.812.018c.014 2.832-2.264 5.13-4.986 5.14l-.545.002-.06-13.177-3.812.018.117 24.72 3.81-.017-.036-7.84.435-.002c.436-.002.873.214.984.54l5.37 7.27 4.465-.02z" fill="#4b4b4b" /><path d="M35.353 21.31c-4.137.02-7.283 2.757-8.46 7.118-1.975-3.04-3.516-6.517-4.4-9.453l-4.355.02.054 11.543a4.14 4.14 0 0 1-4.119 4.158 4.14 4.14 0 0 1-4.158-4.119L9.86 19.034l-4.357.02.054 11.543c.023 4.79 3.85 8.586 8.534 8.563s8.478-3.852 8.456-8.643l-.01-1.96c.878 1.737 1.976 3.583 3.183 5.212l-2.663 12.753 4.464-.02 1.92-9.266c1.747 1.082 3.7 1.725 5.996 1.714 4.792-.023 8.695-3.96 8.67-8.97a8.74 8.74 0 0 0-8.753-8.671zm.062 13.177c-1.742.008-3.487-.746-4.908-1.938l.427-1.743v-.1c.32-1.854 1.282-5.016 4.55-5.03A4.37 4.37 0 0 1 39.861 30c-.098 2.505-2.157 4.475-4.445 4.486z" fill="#6fda44" /></svg>
                    </a>
                </div>

            </div>
        </header>
    )
}

export default HomeIntro