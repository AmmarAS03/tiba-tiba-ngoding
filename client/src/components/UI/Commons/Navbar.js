import React from 'react'

function Navbar() {
    const DashboardButton = () => {
        console.log('Dashboard')
    }

    const ActivityButton = () => {
        console.log('Activity')
    }

    const AboutUsButton = () => {
        console.log('About Us')
    }

    const SignOutButton = () => {
        console.log('Sign Out')
    }

    return (
        <div class="fixed flex flex-col h-screen py-[22.5px] w-[249.75px] justify-between items-center shrink-0 self-stretch border-r-[1.125px] border-[#71825E] bg-[#FFFFFF]">
            <div class="flex flex-col items-center gap-[37.5px]">
                <img src="assets/Logo.svg" alt="Your Image" class="w-[83.827px] h-[70.542px]" />
                <div class="w-[196.501px] h-[0.75px] bg-[#10436A]"></div>
                <button onClick={DashboardButton} class="w-[172.5px] h-[56.25px] hover:rounded-[7px] hover:p-[10px] hover:bg-[#F5F3F3] hover:scale-110 duration-150 flex justify-center items-center gap-[7.5px] rounded-[5.25px]">
                    <div class="text-[#71825E] font-dm-sans text-[26.25px] font-bold leading-normal">
                        Dashboard
                    </div>
                </button>
                <button onClick={ActivityButton} class="w-[172.5px] h-[56.25px] hover:rounded-[7px] hover:p-[10px] hover:bg-[#F5F3F3] hover:scale-110 duration-150 flex justify-center items-center gap-[7.5px] rounded-[5.25px]">
                    <div class="text-[#71825E] font-dm-sans text-[26.25px] font-bold leading-normal">
                        Activity
                    </div>
                </button>
                <button onClick={AboutUsButton} class="w-[172.5px] h-[56.25px] hover:rounded-[7px] hover:p-[10px] hover:bg-[#F5F3F3] hover:scale-110 duration-150 flex justify-center items-center gap-[7.5px] rounded-[5.25px]">
                    <div class="text-[#71825E] font-dm-sans text-[26.25px] font-bold leading-normal">
                        About Us
                    </div>
                </button>
            </div>
            <button onClick={SignOutButton} class="w-[120px] h-[39px] hover:text-[#F65C51] hover:scale-110 hover:font-medium text-[#71825E] font-normal duration-150 flex justify-center items-center gap-[7.5px] flex-shrink-0">
                <div class="text-center font-dm-sans text-[30px] leading-normal">
                    Sign Out
                </div>
            </button>
        </div>
    )
}

export default Navbar