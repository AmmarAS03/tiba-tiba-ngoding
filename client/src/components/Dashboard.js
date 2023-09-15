import React from 'react'
import Profile from './Dashboard/Profile'
import ListofProgramHeld from './Dashboard/ListofProgramHeld'
import ListofProgramJoined from './Dashboard/ListofProgramJoined'

function Dashboard() {
    return (
        <div class="flex flex-col pl-[249.75px] w-screen h-[1024px] pt-[25px] items-center gap-[5px]">
            <Profile />
            <div class="w-[1120px] h-[1.25px] bg-[#71825E] flex-shrink-0"></div>
            <ListofProgramHeld />
            <div class="w-[1120px] h-[1.25px] bg-[#71825E] mt-[50px] flex-shrink-0"></div>
            <ListofProgramJoined />
        </div>
    )
}

export default Dashboard