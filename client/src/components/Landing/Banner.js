import React from 'react'

function Banner() {
    return (
        <div style={{ backgroundImage: 'url("assets/Banner.png")' }} class="flex flex-col items-center w-screen lg:pt-[20px] gap-[25px] lg:gap-[75px] bg-[url('assets/Banner.png') lightgray] bg-center bg-contain bg-no-repeat">
            <div class="text-white text-center font-poppins md:text-[35px] lg:text-[70px] font-bold">
                <br />
                Satukan Langkah,<br />
                Bangun Bersama untuk Bumi Kita
            </div>
            <div class="flex flex-row items-center justify-between md:px-[20px] lg:px-[30px] md:w-[450px] md:h-[122px] lg:w-[735px] lg:h-[180px] flex-shrink-0 rounded-[7px] bg-[#71825E]">
                <div class="flex p-[10px] justify-center items-center gap-[10px] rounded-[10px] bg-[#FFF]">
                    <div class="flex p-[10px] items-start gap-[10px]">
                        <img src="assets/Relawan.png" alt="Your Image" class="w-[50px] h-[50px] lg:w-[108px] lg:h-[108px]" />
                    </div>
                    <div class="flex flex-col items-start justify-center px-[10px] gap-[3px] flex-1 self-stretch">
                        <div class="text-[#71825E] text-center font-dm-sans md:[30px] lg:text-[50px] font-bold">
                            1,207
                        </div>
                        <div class="text-[#71825E] text-center font-dm-sans text-[12px] lg:text-[22px] font-bold">
                            Relawan
                        </div>
                    </div>
                </div>
                <div class="flex p-[10px] justify-center items-center gap-[10px] rounded-[10px] bg-[#FFF]">
                    <div class="flex p-[10px] items-start gap-[10px]">
                        <img src="assets/Kegiatan.png" alt="Your Image" class="w-[50px] h-[50px] lg:w-[108px] lg:h-[108px]" />
                    </div>
                    <div class="flex flex-col items-start justify-center px-[10px] gap-[3px] flex-1 self-stretch">
                        <div class="text-[#71825E] text-center font-dm-sans md:[30px] lg:text-[50px] font-bold">
                            112
                        </div>
                        <div class="text-[#71825E] text-center font-dm-sans text-[12px] lg:text-[22px] font-bold">
                            Kegiatan
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner