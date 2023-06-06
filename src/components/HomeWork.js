import React from 'react'
import SectionHeader from './SectionHeader'
import FeaturedWork from './FeaturedWork'

const HomeWork = ({ works }) => {
    return (
        <div className='my-10'>
            <div className='px-6'>
                <div className='max-w-5xl mx-auto'>
                    <SectionHeader
                        title="Recent Works"
                        link="/work"
                    >
                    </SectionHeader>

                    <div className='flex flex-col gap-1'>
                        {
                            works && works.slice(0, 2).map((work) => (
                                <FeaturedWork work={work}></FeaturedWork>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWork