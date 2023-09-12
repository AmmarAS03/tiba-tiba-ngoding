import React from "react";
import Board from "./Board";
function Head() {
  return (
    <div
      className="flex flex-col items-center gap-[64px] flex-1 bg-[#FFF]"
      style={{
        paddingLeft: "250px",
        paddingBottom: "150px",
      }}
    >
      <div class="inline-flex flex-col items-center gap-y-[46px]">
        <div
          class="flex w-[1190px] h-[350px] p-[10px] flex-col justify-center items-center gap-[10px]"
          style={{ background: 'url("assets/Anak.png") lightgray 50% / cover no-repeat' }}
        ></div>
      </div>
      <Board/>
    </div>
  );
}

export default Head;
