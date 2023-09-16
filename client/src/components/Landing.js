import React from 'react'
import Navbar from './Landing/Navbar'
import Banner from './Landing/Banner'
import Layanan from './Landing/Layanan'
import Kegiatan from './Landing/Kegiatan'
import Testimoni from './Landing/Testimoni'
import JoinUs from './Landing/JoinUs'
import Footer from './UI/Commons/Footer'

function Landing() {
    return (
        <div class="flex flex-col items-start justify-center">
            <Navbar />
            <div class="flex flex-col items-center mt-[82.5px] w-screen px-[200px] pb-[100px] gap-[75px] flex-shrink-0 self-stretch">
                <Banner />
                <Layanan />
                <Kegiatan />
                <Testimoni />
                <JoinUs />
                <Footer />
            </div>
        </div>
    )
}

export default Landing