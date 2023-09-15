import React from "react";

function Logo() {
  return (
    <div class="flex flex-col items-center pt-[230px] sm:pt-0">
        {/* <img
          src="assets/Logo.svg"
          class="w-[111.77px] h-[94.056px]"
          alt="Your Image"
        /> */}
        <img src="assets/Logo.svg" alt="Your Image Description" class=" w-[130px] h-[100px] justify-center sm:w-[210.384px] h-[190.952px]"/>


      <span class="text-[#71825E] justify-center font-poppins text-[34px] sm:text-[46.612px] font-bold leading-[140%]" style={{ textAlign: 'center' }}>
        Gotong Ruang
      </span>

    </div>
  );
}

export default Logo;
