import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#837D96] text-white py-10" id='contact'>
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-4">About Us</h2>
                        <p className="text-white">
                            We are a company dedicated to providing the best real estate experience. From intuitive search tools to seamless transaction processes, our goal is to simplify the journey of renting, buying, or selling a home and exceed your expectations at every step.                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white hover:text-white transition">Home</a></li>
                            <li><a href="#" className="text-white hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="text-white hover:text-white transition">Services</a></li>
                            <li><a href="#" className="text-white hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-white">
                            Addis Ababa,Ethiopia
                        </p>
                        <p className="text-white mt-2">Email: info@company.com</p>
                        <p className="text-white mt-2">Phone: +251 911234566</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-white hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 256 256" ><path fill="white" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V150h26a6 6 0 0 0 0-12h-26v-26a18 18 0 0 1 18-18h16a6 6 0 0 0 0-12h-16a30 30 0 0 0-30 30v26H96a6 6 0 0 0 0 12h26v67.8a90 90 0 1 1 12 0"></path></svg>
                            </a>
                            <a href="#" className="text-white hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 512 512" ><path fill="white" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"></path><path fill="white" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"></path></svg>
                            </a>
                            <a href="#" className="text-white hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" ><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path></svg>
                            </a>
                            <a href="#" className="text-white hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" ><path fill="white" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.51 1.51 0 0 1-1.5 1.5H5.56a1.51 1.51 0 0 1-1.5-1.5V5.56a1.51 1.51 0 0 1 1.5-1.5h12.88a1.51 1.51 0 0 1 1.5 1.5Z"></path><path fill="white" d="M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z"></path><circle cx={7.376} cy={6.744} r={1} fill="white"></circle><path fill="white" d="M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1a.94.94 0 0 1 .84.47a3.61 3.61 0 0 1 5.39 3.15"></path></svg>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-white">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
