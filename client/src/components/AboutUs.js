import React from 'react'
import Navbar from './UI/Commons/Navbar'
import Introduction from './AboutUs/introduction'
import OurMission from './AboutUs/ourmission'
import JoinUs from './AboutUs/joinus'
import Ourvalues from './AboutUs/ourvalues'

function AboutUs() {
    return (
        <div class="flex w-screen h-screen items-start">
            <div class="flex flex-col w-[333px] h-[1024px] justify-between items-center flex-shrink-0">
                <Navbar/>
            </div>
            <div class="flex flex-col w-[1107px] p-[80px] flex-shrink-0 items-center gap-[75px]">
                <Introduction/>
                <OurMission/>
                <JoinUs/>
                <Ourvalues/>
            </div>
        </div>

    )
}

export default AboutUs
