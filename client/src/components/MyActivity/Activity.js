import React from "react";

function Activity() {
  return (
    <div
      className="flex flex-col items-center gap-[64px] flex-1 bg-[#FFF]"
      style={{
        paddingLeft: "300px",
        paddingRight: "100px",
        paddingTop: "100px",
        paddingBottom: "150px",
      }}
    >
      <div class="inline-flex flex-col items-center gap-[70px]">
        <p class="text-right text-[#71825E] font-Poppins text-[32px] font-bold leading-[140%]">
          Aktivitas yang Saya Ikuti
        </p>
        <div class="flex flex-col items-center gap-[15px]">
            {/* Tabel Mulai Dari bawah sini */}
          <div class="flex flex-col items-center w-[900px] h-[30px] px-[10px] gap-[5px] border border-solid border-black rounded-[10px] bg-[var(--Primary---White, #FFF)]">
            <div class="flex justify-between items-center self-stretch px-[20px]">
              <div class="flex flex-col justify-center items-start gap-[40px] flex-[1px]">
                <div class="flex justify-center items-center self-stretch">
                  <div class="flex-[1px]">
                    <p class="text-black font-Poppins text-[20px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </p>
                  </div>
                  <div class="flex-[1px]">
                    <p class="text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                      20 September 2023, 17:00 WIB
                    </p>
                  </div>

                  {/* <div
                    class="flex w-[1190px] h-[350px] p-[10px] flex-col justify-center items-center gap-[10px]"
                    style={{
                      background:
                        'url("assets/Anak.png") lightgray 50% / cover no-repeat',
                    }}
                  ></div> */}
                  <img src="assets/trashicon.png" alt="Trash Icon" class="w-[20px] h-[20px]"/>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center w-[900px] h-[30px] px-[10px] gap-[5px] border border-solid border-black rounded-[10px] bg-[var(--Primary---White, #FFF)]">
            <div class="flex justify-between items-center self-stretch px-[20px]">
              <div class="flex flex-col justify-center items-start gap-[40px] flex-[1px]">
                <div class="flex justify-center items-center self-stretch">
                  <div class="flex-[1px]">
                    <p class="text-black font-Poppins text-[20px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </p>
                  </div>
                  <div class="flex-[1px]">
                    <p class="text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                      20 September 2023, 17:00 WIB
                    </p>
                  </div>

                  {/* <div
                    class="flex w-[1190px] h-[350px] p-[10px] flex-col justify-center items-center gap-[10px]"
                    style={{
                      background:
                        'url("assets/Anak.png") lightgray 50% / cover no-repeat',
                    }}
                  ></div> */}
                  <img src="assets/trashicon.png" alt="Trash Icon" class="w-[20px] h-[20px]"/>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center w-[900px] h-[30px] px-[10px] gap-[5px] border border-solid border-black rounded-[10px] bg-[var(--Primary---White, #FFF)]">
            <div class="flex justify-between items-center self-stretch px-[20px]">
              <div class="flex flex-col justify-center items-start gap-[40px] flex-[1px]">
                <div class="flex justify-center items-center self-stretch">
                  <div class="flex-[1px]">
                    <p class="text-black font-Poppins text-[20px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </p>
                  </div>
                  <div class="flex-[1px]">
                    <p class="text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                      20 September 2023, 17:00 WIB
                    </p>
                  </div>

                  {/* <div
                    class="flex w-[1190px] h-[350px] p-[10px] flex-col justify-center items-center gap-[10px]"
                    style={{
                      background:
                        'url("assets/Anak.png") lightgray 50% / cover no-repeat',
                    }}
                  ></div> */}
                  <img src="assets/trashicon.png" alt="Trash Icon" class="w-[20px] h-[20px]"/>
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
}

export default Activity;
