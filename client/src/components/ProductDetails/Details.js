import React from "react";
import ProductCards from "./ProductCards";

function Details() {
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
      <div class="flex flex-col items-center gap-[17px]">
        <h2 class="text-right text-[#71825E] font-poppins text-[40px] font-bold leading-[140%]">
          Membersihkan Danau Kenanga
        </h2>
        <div class="flex flex-col items-center gap-[20px]">
          <div class="flex flex-col w-[835px] p-[30px] [10px] items-center gap-[0px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]">
            <div class="flex h-[390px] p-[0px] [47px] justify-between items-center self-stretch">
              <div class="w-[305px] h-[305px] rounded-5 bg-[url('<path-to-image>') lightgray] bg-center bg-cover bg-no-repeat">
                <img
                  src="assets/Trash.png"
                  alt="Trash"
                  class="w-full h-full rounded-[5px]"
                />
              </div>
              <div class="flex flex-col w-[409px] h-[377px] justify-center items-start gap-[190px]">
                <div class="flex flex-col justify-center items-start gap-[78px]">
                  <div class="flex flex-col w-[409px] justify-center items-center">
                    <div class="flex flex-col w-[409px] h-[89px] justify-center items-center gap-[5px]">
                      <div class="self-stretch">
                        <p class="text-black font-poppins text-[24px] font-bold leading-[140%]">
                          Depok, Jawa Barat
                        </p>
                      </div>
                      <div class="self-stretch">
                        <p class="text-[#305C7D] font-poppins text-20 font-bold leading-[140%]">
                          20 September 2023, 17:00
                        </p>
                      </div>
                      <div class="self-stretch">
                        <p class="text-[var(--Primary, #545F71)] font-poppins text-[12px] font-bold leading-[140%]">
                          Target: 15 relawan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col justify-center items-start gap-[81px]">
                    <div class="flex flex-col w-[409px] h-[38px] justify-center items-center">
                      <div class="h-[235px] flex-shrink-[0px] self-stretch">
                        <p class="text-[var(--Primary, #545F71)] font-poppins text-[11px] font-normal leading-[160%]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna At vero eos et accusamus et iusto odio
                          dignissimos ducimus qui blanditiis praesentium
                          voluptatum deleniti atque corrupti quos dolores et
                          quas molestias excepturi sint occaecati cupiditate non
                          provident, similique sunt in culpa qui officia
                          deserunt mollitia animi, id est laborum et dolorum
                          fuga. Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.
                        </p>
                      </div>
                    </div>

                    <div class="flex w-[409px] items-center gap-[40px]">
                      <div class="flex flex-col justify-center items-center flex-[1px]">
                        <div class="self-stretch">
                          <p class="text-[var(--Primary, #545F71)] font-poppins text-[14px] font-normal leading-[160%]">
                            Diunggah oleh: Sarah Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex w-[786px] items-center gap-[20px] pl-[10px]">
              <button class="flex w-[130px] h-[40px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
                <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                  Ikut Kegiatan
                </div>
              </button>


              
              <button class="flex w-[245px] h-[40px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#25D366]">
              <div class="flex items-center gap-[10px]">
                <div class="w-[151px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                  Join Group WhatsApp
                </div>
                <div class="w-[25px] h-[25px] bg-lightgray bg-center bg-cover bg-no-repeat">
                  <img
                    src="assets/WhatsApp.png"
                    alt="WhatsApp Icon"
                    class="w-full h-full"
                  />
                </div>
                </div>
              </button>
        
            </div>
          </div>
        </div>
      </div>
      <ProductCards/>
    </div>
  );
}

export default Details;
