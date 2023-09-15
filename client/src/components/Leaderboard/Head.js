import React from "react";
import Board from "./Board";
import Footer from "../UI/Commons/Footer";
function Head() {
  return (
    <div
      className="flex flex-col items-center gap-[64px] flex-1 bg-[#FFF]"
      style={{
        paddingTop: "90px",

      }}
    >
      <div class="flex flex-col items-center">
        <div class="relative w-screen h-[200px] flex flex-col justify-center items-center" style={{
          backgroundImage: 'url("assets/Anak.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <img
            src="assets/Anak.png"
            alt="Anak"
            class="w-full h-auto object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-[40px] md:text-[64px] font-bold">Leaderboard</p>
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
