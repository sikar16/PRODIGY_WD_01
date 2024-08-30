import React from 'react';
import hero from '../../assets/hero.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <>
            <div className="relative" id='blog'>
                <img src={hero} alt="Hero" className='h-[300px] md:h-[500px] w-full object-cover' />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center'>
                    <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
                        What Our Clients Say
                    </h1>
                    <div className='px-4 md:px-6 lg:px-20'>
                        <Slider {...settings}>
                            {Array(4).fill("").map((_, i) => (
                                <div key={i} className="px-2">
                                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <p className="text-xl md:text-2xl text-indigo-500 mb-2 md:mb-4">"</p>
                                        <p className='text-xs md:text-sm text-gray-700 mb-4 md:mb-6'>
                                            The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes fit perfectly. I'm beyond satisfied!
                                        </p>
                                        <div className='flex items-center'>
                                            <img src={hero} alt="Client" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover border-2 border-indigo-500' />
                                            <p className='text-left pl-4 text-gray-900 font-semibold text-xs md:text-sm'>Mahlet Misganaw</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;
