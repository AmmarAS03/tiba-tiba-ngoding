import React from 'react'

function LoginCard() {
    return (
        <div class="flex flex-col justify-center items-center w-548 py-[30px] px-[90px] gap-[20px] rounded-[20px] bg-[#71825E]">
            <div class="h-[51px] text-[#FFF] text-center font-dm-sans text-[35px] font-normal self-stretch">
                Log Into your Account
            </div>
            <div class="flex flex-col justify-center items-center gap-[20px]">
                <div class="flex flex-col items-start gap-[25px]">
                    <div class="flex flex-col items-start gap-5">
                        <div class="text-white font-dm-sans text-[20px] font-bold">
                            Email Address
                        </div>
                        <div class="flex flex-col w-[360px] h-[50px] px-[10px] justify-center items-start gap-[10px] rounded-[6px] border border-[#404040] bg-white">
                            <div class="w-233 h-25 flex-shrink-0 text-[#4E5A6E] font-dm-sans text-[20px] font-normal">
                                qissa@ristek.cs.ui.ac.id
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-5">
                        <div class="text-white font-dm-sans text-[20px] font-bold">
                            Password
                        </div>
                        <div class="flex flex-col w-[360px] h-[50px] px-[10px] justify-center items-start gap-[10px] rounded-[6px] border border-[#404040] bg-white">
                            <div class="w-233 h-25 flex-shrink-0 text-[#4E5A6E] font-dm-sans text-[20px] font-normal">
                                ********
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-[113.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
                    <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                        LOGIN
                    </div>
                </div>
                <div class="flex flex-row w-[168px] h-[25px] justify-center text-center font-poppins text-[12px] font-normal leading-[160%] gap-1">
                    <div className="text-[#FFFFFF]">
                        New to Gatherly?
                    </div>
                    <div class="text-[#03B3D7]">
                        Register
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCard