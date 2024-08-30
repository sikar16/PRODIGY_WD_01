import React from 'react';
import hero from '../../assets/hero.jpg';

function Hero() {
    return (
        <div className="bg-[#837D96] py-12 px-4 md:px-12" id='home'>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="w-full md:w-1/2 mt-8 md:mt-0 text-white md:order-1 order-2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Perfect Home</h1>
                    <p className="mb-8 text-sm md:text-base">Apex is not just a platform for finding real estate; it's a gateway to a world of limitless opportunities in the real estate market.</p>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
                        <ul className="md:flex gap-3 sm:block">
                            <li>
                                <label className="block text-gray-700 font-semibold">Location</label>
                                <select className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring focus:border-blue-300">
                                    <option value="">Select Location</option>
                                    <option value="addis-ababa">Addis Ababa</option>
                                    <option value="jimma">Jimma</option>
                                    <option value="gonder">Gonder</option>
                                    <option value="bahirdar">Bahirdar</option>
                                    <option value="arbaminch">Arbaminch</option>
                                    <option value="wolayita-sodo">Wolayita Sodo</option>
                                </select>
                            </li>
                            <li>
                                <label className="block text-gray-700 font-semibold">Type</label>
                                <select className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring focus:border-blue-300">
                                    <option value="">Select Type</option>
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                </select>
                            </li>
                            <li>
                                <label className="block text-gray-700 font-semibold">Range</label>
                                <select className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring focus:border-blue-300">
                                    <option value="">Select Range</option>
                                    <option value="10k-15k">10,000 - 15,000 birr</option>
                                    <option value="15k-20k">15,000 - 20,000 birr</option>
                                    <option value="20k-25k">20,000 - 25,000 birr</option>
                                    <option value="25k-30k">25,000 - 30,000 birr</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                    <img src={hero} alt="Real Estate Hero" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
