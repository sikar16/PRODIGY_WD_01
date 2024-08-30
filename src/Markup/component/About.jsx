import React from 'react';
import home from '../../assets/home2.webp';

function About() {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300" id='service'>
            <p className="text-center text-5xl font-extrabold text-gray-800 mb-12 drop-shadow-md">Why You Choose Us</p>
            <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto px-4">
                <div className="w-full md:w-1/2 md:pr-8">
                    <img src={home} alt="Home" className="w-full h-auto rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out" />
                </div>
                <div className="w-full md:w-1/2 mt-12 md:mt-0">
                    <ul className="space-y-10">
                        <li className="flex items-start space-x-6">
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-r  rounded-full text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 56 56" fill="currentColor">
                                    <path d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-6.75-10.828c-2.578 0-3.89-1.312-3.89-3.96V17.991c0-2.625 1.312-3.96 3.89-3.96h5.648v9.445c0 1.617.774 2.367 2.391 2.367h9.281v11.273c0 2.625-1.289 3.961-3.89 3.961Zm8.227-17.133c-.446 0-.68-.234-.68-.68v-9.093c.515.07 1.054.445 1.64 1.055l6.938 7.078c.61.61.984 1.125 1.055 1.64Z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-800 mb-2">Prime Locations</p>
                                <p className="text-gray-700">Each of our properties is strategically located in desirable neighborhoods, offering convenience, accessibility, and a high quality of life.</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-6">
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-r  rounded-full text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 56 56" fill="currentColor">
                                    <path d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-6.75-10.828c-2.578 0-3.89-1.312-3.89-3.96V17.991c0-2.625 1.312-3.96 3.89-3.96h5.648v9.445c0 1.617.774 2.367 2.391 2.367h9.281v11.273c0 2.625-1.289 3.961-3.89 3.961Zm8.227-17.133c-.446 0-.68-.234-.68-.68v-9.093c.515.07 1.054.445 1.64 1.055l6.938 7.078c.61.61.984 1.125 1.055 1.64Z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-800 mb-2">Quality Homes</p>
                                <p className="text-gray-700">Our homes are built to the highest standards, ensuring durability, comfort, and style. Experience the best in modern living.</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-6">
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-r  rounded-full text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 56 56" fill="currentColor">
                                    <path d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-6.75-10.828c-2.578 0-3.89-1.312-3.89-3.96V17.991c0-2.625 1.312-3.96 3.89-3.96h5.648v9.445c0 1.617.774 2.367 2.391 2.367h9.281v11.273c0 2.625-1.289 3.961-3.89 3.961Zm8.227-17.133c-.446 0-.68-.234-.68-.68v-9.093c.515.07 1.054.445 1.64 1.055l6.938 7.078c.61.61.984 1.125 1.055 1.64Z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-800 mb-2">Experienced Team</p>
                                <p className="text-gray-700">Our team has years of experience in the real estate market, ensuring you get the best advice and support throughout your journey.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <p className=" text-2xl ms-10 text-gray-800 mt-20 mb-12 drop-shadow-md">Your Trusted Property Experts</p>

            <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-4 space-y-12 md:space-y-0 md:space-x-8">
                <div className="flex w-full md:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <div className="p-8 w-2/3">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">Our team has years of experience in the real estate market, ensuring you get the best advice and support throughout your journey. Our team has years of experience in the real estate market, ensuring you get the best advice and support throughout your journey.</p>
                    </div>
                    <img src={home} alt="Trust" className="w-1/3 object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-6 w-full md:w-1/3">
                    <div className=" bg-white text-black rounded-lg shadow-xl py-8 px-6 text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                        <p className="text-3xl font-bold">17 +K</p>
                        <p className="text-sm">Satisfied Customers</p>
                    </div>
                    <div className="bg-white  text-black rounded-lg shadow-xl py-8 px-6 text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                        <p className="text-3xl font-bold">17 +K</p>
                        <p className="text-sm">Satisfied Customers</p>
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-xl py-8 px-6 text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                        <p className="text-3xl font-bold">17 +K</p>
                        <p className="text-sm">Satisfied Customers</p>
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-xl py-8 px-6 text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                        <p className="text-3xl font-bold">17 +K</p>
                        <p className="text-sm">Satisfied Customers</p>
                    </div>
                </div>
            </div>


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <section className="py-16 bg-gray-50" id='property'>
                <p className="ms-10 text-2xl text-gray-800 mb-10 drop-shadow-lg">Popular Property</p>
                <div className="sm:flex ms-10 gap-4 mb-10">
                    <button className="py-2 px-4 m-1 text-white bg-[#554871] rounded-lg shadow-lg hover:bg-[#6d5e7f] transition-colors duration-300">Commercial</button>
                    <button className="py-2 px-4 m-1 text-white bg-[#554871] rounded-lg shadow-lg hover:bg-[#6d5e7f] transition-colors duration-300">Personal</button>
                    <button className="py-2 px-4 m-1 text-white bg-[#554871] rounded-lg shadow-lg hover:bg-[#6d5e7f] transition-colors duration-300">Industrial</button>
                    <button className="py-2 px-4 m-1 text-white bg-[#554871] rounded-lg shadow-lg hover:bg-[#6d5e7f] transition-colors duration-300">Other</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={home} alt="Property" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-xl font-semibold text-gray-800 mb-2">Rent</p>
                                <p className="text-lg text-gray-700 mb-2">6000 birr/month</p>
                                <p className="text-md text-gray-600 mb-2">Villa</p>
                                <p className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</p>
                                <p className="text-sm text-gray-500 mb-4">Addis Ababa, Ethiopia</p>
                                <hr className="border-gray-300 mb-4" />
                                <div className="flex justify-between text-sm text-gray-600">
                                    <p>3 beds</p>
                                    <p>2 baths</p>
                                    <p>4000 sqft</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>




        </section>
    );
}

export default About;
