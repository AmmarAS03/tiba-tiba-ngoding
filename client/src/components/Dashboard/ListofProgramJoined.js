import React from 'react'

function ListofProgramJoined() {
    return (
        <div class="flex flex-col py-[20px] justify-center items-center gap-[20px]">
            <div class="flex flex-col items-center gap-[23px]">
                <div class="flex flex-col w-[1190.25px] items-start gap-[30px] px-[50px]">
                    <div class="w-[993px] text-black font-poppins text-2xl font-bold leading-[28px]">
                        Kegiatan yang kamu ikuti
                    </div>
                    <div class="flex items-center content-center gap-[30px] flex-wrap">
                        <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                            <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                                <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                                    <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                                    <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                                        <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                                            Membersihkan Danau Kenanga
                                        </div>
                                        <div class="flex flex-col justify-center items-center self-stretch">
                                            <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                                                20 September 2023
                                            </div>
                                            <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                                                Depok, Jawa Barat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-[40px] self-stretch">
                                <div class="flex flex-col justify-center items-center flex-[1_1_0]">
                                    <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-normal leading-[19.2px]">
                                        Diunggah oleh:
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center flex-[1_1_0]">
                                    <div class="self-stretch text-right text-[#545F71] font-Poppins text-[12px] font-normal leading-[19.2px]">
                                        Sarah Smith
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-end gap-[10px] self-stretch px-[50px]">
                    <div class="w-[250px] h-[50px] py-[8px] px-[22px] flex justify-center items-center gap-[10px] rounded-[10px] bg-[#71825E]">
                        <div class="w-[163px] h-[39px] flex flex-col justify-center items-center gap-[6px] text-white text-center">
                            <p class="font-poppins text-[14px] font-semibold leading-5">Lihat Kegiatan Lainnya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListofProgramJoined