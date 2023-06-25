import React from 'react'
import { images } from '../layouts'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footers() {

    const SOCIAL = [
        {
            id: 1,
            link: "https://twitter.com/home",
            icon: <FaTwitter />

        },
        {
            id: 2,
            link: "https://web.facebook.com/?_rdc=1&_rdr",
            icon: <FaFacebook />

        },
        {
            id: 3,
            link: "https://www.linkedin.com/feed/",
            icon: <FaLinkedin />

        },
        {
            id: 4,
            link: "https://www.linkedin.com/feed/",
            icon: <FaInstagram />

        },
        
    ];


    return (
        <>
        <div className=' bg-green-700'>
            <div className='flex md:items-center  justify-evenly flex-col md:flex-row md:p-10 mt-56'>
                <div>
                    <img src={images.logo} alt='logo' className='w-44 p-10 rounded-full' />
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



                <div className='space-y-5 flex flex-col md:flex-row md:justify-between md:items-center '>
                    <div className='flex flex-col ml-20 md:ml-32 ' >
                        <h2 className='uppercase md:mt-3 text-white font-bold'>nuesa</h2>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Home</a>
                        <a href="/" className="text-white text-sm hover:text-gray-400">About</a>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Services</a>
                    </div>


                    <div className='flex flex-col ml-20 md:ml-32'>
                        <h2 className='uppercase text-white font-bold'>support</h2>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Contact</a>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Download & Resourses</a>
                        <a href="/" className="text-white text-sm hover:text-gray-400">Entertainments</a>

                    </div>

                </div>
            </div>
            <div>
            <p className='max-w_xl flex justify-center items-center font-light text-white'>© 2023 Aliyu Abdulrazak.com</p>
            </div>
            </div>
        </>
    )
}

export default Footers