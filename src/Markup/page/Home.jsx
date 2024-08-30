import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import About from '../component/About'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'

function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home