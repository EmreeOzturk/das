import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-center items-center'>
            <div className='relative w-[532px] h-[532px]'>
                <Image src="/globe2.svg" alt="Globe" fill className='object-contain' />
                <button className='bg-[#9f01ff] text-white px-12 py-8 w-[390px] text-4xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    Contact Us
                </button>
            </div>

        </div>
    )
}

export default ContactUs