import React, { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="nav-wrapper">
                <div className='flex justify-between items-center px-5 md:ps-[10%] bg-white py-3'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                            <path fill="none" stroke="black" d="M22.5 21V10.25l-.247-.113a20 20 0 0 1-8.942-8.104L13 1.5h-2l-.311.533a20 20 0 0 1-8.942 8.104l-.247.113V21M23 22.5H1M15 21v-4a3 3 0 1 0-6 0v4"></path>
                        </svg>
                        <p className='text-lg md:text-2xl text-center ml-4 mt-1 font-semibold'>SME</p>
                    </div>

                    <div className='hidden md:block'>
                        <ul className='flex gap-5 text-sm '>
                            <li> <a href='#home' className='hover:bg-slate-200 rounded-sm px-2 py-1 cursor-pointer'>Home </a></li>
                            <li> <a href='#service' className='hover:bg-slate-200 rounded-sm px-2 py-1 cursor-pointer'>Service</a></li>
                            <li> <a href='#property' className='hover:bg-slate-200 rounded-sm px-2 py-1 cursor-pointer'>Property</a></li>
                            <li> <a href='#about' className='hover:bg-slate-200 rounded-sm px-2 py-1 cursor-pointer'>About</a> </li>
                            <li> <a href='#blog' className='hover:bg-slate-200 rounded-sm px-2 py-1 cursor-pointer'>Blog</a> </li>
                            <li> <a href='#contact' className='hover:bg-slate-200 rounded-sm px-2 py-1 cursor-pointer'>Contact</a> </li>
                        </ul>
                    </div>

                    <div className='flex gap-2 mt-2 md:mt-0 '>
                        <div className='md:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" stroke="black">
                                    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className='hidden md:block text-sm '>
                            <button className='py-[3px] px-[8px] bg-[#554871] text-white rounded-[6px] me-2'>Login</button>
                            <button className='py-[1px] px-[8px] border-2 border-[#554871] text-black rounded-[6px]'>Signup</button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col items-center gap-3 bg-gray-100 py-4  pt-20'>
                        <li> <a href='#home' className='hover:underline cursor-pointer'>Home </a></li>
                        <li> <a href='#service' className='hover:underline cursor-pointer'>Service</a></li>
                        <li> <a href='#property' className='hover:underline cursor-pointer'>Property</a></li>
                        <li> <a href='#about' className='hover:underline cursor-pointer'>About</a> </li>
                        <li> <a href='#blog' className='hover:underline cursor-pointer'>Blog</a> </li>
                        <li> <a href='#contact'>Contact</a> </li>
                        <button className='py-1 px-3 md:py-[3px] md:px-3 bg-[#554871] text-white rounded-lg'>Login</button>
                        <button className='py-1 px-3 md:py-[3px] md:px-3 border-2 border-[#554871] text-black rounded-lg'>Signup</button>
                    </ul>
                </div>
            )}

            <hr />
        </>
    );
}

export default Nav;