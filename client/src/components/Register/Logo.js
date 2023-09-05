import React from "react";

function Logo() {
  return (
    <div class="flex flex-col items-center gap-[25px]">
      <div class="w-[300px] h-[252.454px]">
        {/* <img
          src="assets/Logo.svg"
          class="w-[111.77px] h-[94.056px]"
          alt="Your Image"
        /> */}
        <img src="assets/Logo.svg" alt="Your Image Description" class="w-[300px] h-[252.454px]"/>

      </div>
      <div class="text-[#71825E] font-poppins text-4xl font-bold leading-9">
        Gotong Ruang
      </div>
    </div>
  );
}

export default Logo;
