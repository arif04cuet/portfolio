import Link from 'next/link'
import React from 'react'

const SectionHeader = ({ title, link }) => {
    return (

        <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <Link href={link} className='text-secondary-500 font-bold'>View all</Link>
        </div>

    )
}

export default SectionHeader