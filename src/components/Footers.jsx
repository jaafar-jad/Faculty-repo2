import React from 'react'
import { images } from '../layouts'
import { SOCIAL } from '../utils/data'
import { Link } from 'react-router-dom'

function Footers() {
    return (
        <>
            <div className=' bg-green-700'>
                <div>
                    <img src={images.nuesa} alt='logo' className='w-44 p-10 rounded-full' />
                </div>
                <div className='flex space-x-5 justify-center items-center'>
                    {SOCIAL.map(({ id, link, icon }) => {
                        return (
                            <a
                                href={link}
                                key={id}
                                target='_blank'
                                rel='noopener noreferrer'
                                className="text-white text-xl md:text-3xl  cursor-pointer duration-300 hover:text-orange-400  "
                            >
                                {icon}
                            </a>
                        )
                    })}
                </div>



                <div className='space-y-5 flex flex-col md:flex-row md:justify-evenly md:items-center '>
                    <div className='flex flex-col md:space-y-3 ml-10 md:ml-32 ' >
                        <h2 className='uppercase md:mt-3 text-orange-400 font-bold'>nuesa</h2>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Home</a>
                        <Link to='/about' className='text-white text-sm hover:text-gray-400'>About</Link>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Leadership</a>
                    </div>


                    <div className='flex flex-col md:space-y-3  ml-10 md:ml-32'>
                        <h2 className='uppercase text-orange-400 font-bold'>support</h2>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Download & Resourses</a>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Entertainments</a>

                    </div>

                </div>
                <div>
                    <p className='flex justify-center items-center text-[0.7rem] font-light text-white'>© NUESA 2024</p>
                </div>
            </div>

        </>
    )
}

export default Footers