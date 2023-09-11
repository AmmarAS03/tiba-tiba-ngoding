import React from "react";

function SmallCards() {
  return (

      <div class="flex justify-center items-start gap-[20px]">
        <div class="flex flex-col items-center justify-center w-[247px] h-[322px] p-[30px] border-[0.3px] border-solid border-black rounded-[10px] bg-[#FFF] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] gap-[37px]">
          <div class="flex flex-col justify-center items-start gap-[11px] self-stretch">
            <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
              <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                <div class="w-[202px] h-[133px] rounded-[5px] relative">
                  <img
                    src="assets/Trash.png"
                    alt="Trash"
                    class="w-full h-full absolute inset-0 object-cover"
                  />
                </div>
                <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                  <div class="flex flex-col self-stretch">
                    <p class="text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </p>
                  </div>

                  <div class="flex flex-col justify-center items-center self-stretch">
                    <div class="self-stretch">
                      <p class="text-[#545F71] font-poppins text-[12px] font-semibold leading-[140%]">
                        20 September 2023
                      </p>
                    </div>
                    <div class="self-stretch">
                      <p class="text-[#10436A] font-poppins text-[12px] font-semibold leading-[140%]">
                        Depok, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-center items-center self-stretch">
              <div class="flex items-center gap-[40px] self-stretch">
                <div class="flex flex-col justify-center items-center flex-[1px]">
                  <div class="flex self-stretch">
                    <p class="text-[#545F71] text-[10px] font-normal font-poppins leading-[160%]">
                      Diunggah oleh:
                    </p>
                  </div>
                </div>
                <div class="flex flex-col justify-center items-center flex-[1px]">
                  <div class="flex self-stretch items-center gap-[1px]">
                    <p class="text-right text-[#545F71] font-Poppins text-xs font-normal leading-[19.2px]">
                      Sarah Smith
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default SmallCards;
