import React from 'react'
import Profile from './Dashboard/Profile'
import ListofProgramHeld from './Dashboard/ListofProgramHeld'
import ListofProgramJoined from './Dashboard/ListofProgramJoined'

function Dashboard() {
    return (
        <div class="flex flex-col w-screen h-[1024px] px-4 pt-[91.41px] items-center gap-[5px]">
            <Profile />
            <div class="w-full px-[20px] lg:w-[1120px] h-[1.25px] bg-[#71825E] flex-shrink-0"></div>
            <ListofProgramHeld />
            <div class="w-full px-[20px] lg:w-[1120px] h-[1.25px] bg-[#71825E] mt-[50px] flex-shrink-0"></div>
            <ListofProgramJoined />
        </div>
    )
}

export default Dashboard