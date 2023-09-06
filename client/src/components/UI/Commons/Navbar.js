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
        <div class="flex flex-col h-screen py-[30px] w-[333px] justify-between items-center shrink-0 self-stretch border-r-[1.5px] border-[#71825E] bg-[#FFFFFF]">
            <div class="flex flex-col items-center gap-[50px]">
                <img src="assets/Logo.svg" alt="Your Image" class="w-[111.77px] h-[94.056px]" />
                <div class="w-[262.002px] h-[1px] bg-[#10436A]"></div>
                <button onClick={DashboardButton} class="w-[230px] h-[75px] hover:rounded-[7px] hover:p-[10px] hover:bg-[#F5F3F3] hover:scale-110 duration-150 flex justify-center items-center gap-[10px] rounded-[7px]">
                    <div class="text-[#71825E] font-dm-sans text-[35px] font-bold leading-normal">
                        Dashboard
                    </div>
                </button>
                <button onClick={ActivityButton} class="w-[230px] h-[75px] hover:rounded-[7px] hover:p-[10px] hover:bg-[#F5F3F3] hover:scale-110 duration-150 flex justify-center items-center gap-[10px] rounded-[7px]">
                    <div class="text-[#71825E] font-dm-sans text-[35px] font-bold leading-normal">
                        Activity
                    </div>
                </button>
                <button onClick={AboutUsButton} class="w-[230px] h-[75px] hover:rounded-[7px] hover:p-[10px] hover:bg-[#F5F3F3] hover:scale-110 duration-150 flex justify-center items-center gap-[10px] rounded-[7px]">
                    <div class="text-[#71825E] font-dm-sans text-[35px] font-bold leading-normal">
                        About Us
                    </div>
                </button>
            </div>
            <button onClick={SignOutButton} class="w-[230px] h-[75px] hover:text-[#F65C51] hover:scale-110 hover:font-medium text-[#71825E] font-normal duration-150 flex justify-center items-center gap-[10px] flex-shrink-0">
                <div class="text-center font-dm-sans text-[40px] leading-normal">
                    Sign Out
                </div>
            </button>
        </div>
    )
}

export default Navbar