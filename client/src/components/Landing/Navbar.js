import React from 'react'
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
    return (
        <div class='fixed flex top-0 w-screen h-[82.5px] px-[37.5px] py-[18.75px] justify-between items-center border-[0.844px] border-[#71825E] bg-white'>
            <div class="flex justify-center items-center gap-[37.5px]">
                <div class="flex w-[141.75px] flex-col justify-center items-center gap-[7.5px]">
                    <img src="assets/Logo.svg" alt="Your Image" class="w-[62.871px] h-[52.907px]" />
                </div>
                <div class="w-[0.563px] h-[52.907px] bg-blue-800" />
                <div class="hover:bg-[#F5F3F3] hover:scale-110 w-[130px] h-[45px] p-[10px] flex justify-center items-center gap-[10px] rounded-[7px]">
                    <p class="text-[#71825E] font-dm-sans text-[20px] font-bold">
                        About Us
                    </p>
                </div>
            </div>
            <button class="w-[113.25px] h-[39px] hover:text-[#A8E0FF] text-[#71825E] hover:scale-110 hover:font-medium font-normal duration-150 flex justify-center items-center gap-[7.5px] flex-shrink-0">
                <div onClick={() => navigate("/login")} class="text-center font-dm-sans text-[22.5px] leading-normal">
                    Login
                </div>
            </button>
        </div>
    )
}
export default Navbar