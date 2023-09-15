import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";


const NavLinks = () => {
    return (
        <>
            <NavLink to="/product" className="hover:bg-[#F5F3F3] hover:scale-110 w-[100px] h-[30px] p-[10px] flex justify-center items-center gap-[10px] rounded-[7px] text-[#71825E] font-dm-sans text-[15px] font-bold">Activity</NavLink>
            <NavLink to="/leaderboard" className="hover:bg-[#F5F3F3] hover:scale-110 w-[100px] h-[30px] p-[10px] flex justify-center items-center gap-[10px] rounded-[7px] text-[#71825E] font-dm-sans text-[15px] font-bold">Leaderboard</NavLink>
            <NavLink to="/aboutus" className="hover:bg-[#F5F3F3] hover:scale-110 w-[100px] h-[30px] p-[10px] flex justify-center items-center gap-[10px] rounded-[7px] text-[#71825E] font-dm-sans text-[15px] font-bold">About Us</NavLink>
            <NavLink to="/login" className="hover:bg-[#F5F3F3] hover:scale-110 w-[100px] h-[30px] p-[10px] flex justify-center items-center gap-[10px] rounded-[7px] text-[#71825E] font-dm-sans text-[15px] font-bold">Login</NavLink>
        </>
    );
};

function UpperNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const DashboardButton = () => {
        console.log("Dashboard");
    };

    const navigate = useNavigate();

    const ActivityButton = () => {
        console.log("Activity");
    };

    const SignOutButton = async (e) => {
        const response = await fetch("http://localhost:5000/users/logout");
        console.log(response);
    };


    return (
        <>
            <div class='fixed flex flex-wrap top-0 w-screen h-auto px-[37.5px] py-[18.75px] justify-between items-center border-[0.844px] border-[#71825E] bg-white'>
                <div class="flex w-full justify-start items-center gap-[30px]">
                    <button onClick={() => navigate("/dashboard")} class="flex w-[141.75px] flex-col justify-center items-center gap-[7.5px]">
                        <img src="assets/Logo.svg" alt="Your Image" class="w-[62.871px] h-[52.907px]" />
                    </button>
                    <div class="w-[0.563px] h-[52.907px] bg-[#71825E]" />
                    <div className="hidden md:flex w-full justify-end gap-[30px]">
                        <NavLinks />
                    </div>
                    <div class="flex md:hidden w-full justify-end gap-[30px]">
                        <button onClick={toggleNavbar} class="hover:scale-110 w-[50px] h-[50px]">{isOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {isOpen && (
                    <div class="flex basis-full flex-col items-center gap-[5px] pt-[5px] mt-[5px]">
                        <NavLinks />
                    </div>
                )}
            </div >
        </>
    )
}
export default UpperNav