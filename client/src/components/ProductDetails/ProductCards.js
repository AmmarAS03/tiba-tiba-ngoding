import React from "react";
import SmallCards from "./SmallCards";

function ProductCards() {
  return (
    <div class="flex flex-col items-center gap-[23px]">
      <div class="flex flex-col items-center gap-[30px]">
        <div class="w-[993px] flex items-start">
          <p class="text-black font-poppins text-[20px] font-semibold leading-[140%]">
            Kegiatan Lainnya untuk Diikuti
          </p>
        </div>

        <div class="flex justify-center items-start gap-[23px]">
          <SmallCards />
          <SmallCards />
          <SmallCards />
        </div>

        <div class="flex justify-center items-start gap-[23px]">
          <SmallCards />
          <SmallCards />
          <SmallCards />
        </div>

        <div class="flex justify-center items-center gap-x-[312px]">
          <div class="flex flex-col w-[250px] h-[49px] justify-center items-center gap-[10px]"></div>
          <div class="flex justify-center items-center gap-x-[-11px]">
            <button class="flex w-[229px] h-[40px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
              <div class="w-[202px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                Lihat Kegiatan Lainnya
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
