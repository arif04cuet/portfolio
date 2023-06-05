import Image from 'next/image';
import React from 'react'

const FeaturedWork = ({ work }) => {

    console.log(work);
    const { technologies } = work;

    return (
        <div className='flex border-b-2 py-6 flex-col md:flex-row'>

            <div className='w-full md:w-1/3 mb-3 md:mr-6'>
                <Image
                    src={work.image}
                    className='rounded-lg'
                    layout='responsive'
                    width={250}
                    height={200}
                />
            </div>
            <div>
                <h2 className=' text-2xl font-medium mb-3'>{work.title}</h2>
                <ul className='flex gap-6 items-center mb-2 text-gray-500'>
                    <li className=''>{work.date}</li>
                    |
                    <li className=''>{work.category}</li>
                </ul>

                <ul className='flex gap-3 items-center mb-4'>
                    {
                        technologies && technologies
                            .split(',')
                            .map((tech) => (
                                <li className='bg-secondary-800 text-white px-2 py-1 rounded-lg text-sm'>{tech}</li>
                            ))
                    }
                </ul>
                <p className=''>{work.description}</p>
            </div>
        </div>
    )
}

export default FeaturedWork