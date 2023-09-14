import React from "react";
import Board from "./Board";
import Footer from "../UI/Commons/Footer";
function Head() {
  return (
    <div
      className="flex flex-col items-center gap-[64px] flex-1 bg-[#FFF]"
      style={{
        paddingLeft: "250px",

      }}
    >
      <div class="inline-flex flex-col items-center gap-y-[46px]">
        <div class="relative w-[1190px] h-[200px] p-[10px] flex flex-col justify-center items-center gap-[10px]">
          <img
            src="assets/Anak.png"
            alt="Anak"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-[64px] font-bold">Leaderboard</p>
          </div>
        </div>
      </div>
      <Board />
      
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Head;
