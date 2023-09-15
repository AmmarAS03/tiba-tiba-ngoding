import React from "react";
import Footer from "../UI/Commons/Footer";

function Board() {
  return (
    <div class="flex flex-col items-start">
      <div class="flex items-center justify-between w-[970px] h-[50px] text-black">
        <div class="flex flex-col items-center justify-center w-[95px] flex-shrink-[0px] self-stretch">
          <p class="text-center font-Poppins text-[15px] font-bold">Ranking</p>
        </div>

        <div class="flex flex-col items-center justify-center w-[375px] flex-shrink-[0px] self-stretch">
          <p class="text-center text-black font-Poppins text-[15px] font-semibold">
            Nama
          </p>
        </div>

        <div class="flex flex-col items-center justify-center w-[295px] flex-shrink-[0px] self-stretch">
          <p class="text-center text-black font-Poppins text-[15px] font-semibold">
            Asal Kota
          </p>
        </div>

        <div class="flex flex-col items-center justify-center w-[185px] flex-shrink-[0px] self-stretch">
          <p class="text-center text-black font-Poppins text-[15px] font-semibold">
            Points
          </p>
        </div>
      </div>

      <div class="flex flex-col w-[970px] flex-shrink-[0px] items-start gap-[2px] border border-gray-[400px]">
        {/* Ini Juara 1 */}
        <div class="flex h-[100px] justify-between items-center self-stretch">
          <div
            class="flex flex-col items-center justify-center h-[100px] w-[95px]"
            style={{ background: "rgba(220, 220, 220, 0.86)" }}
          >
            <div
              className="flex flex-col items-center justify-center h-[100px] flex-shrink-[0px] self-stretch"
              style={{
                color: "var(--State---Orange, #E08700)",
                textAlign: "center",
              }}
            >
              <p className="font-Poppins text-[30px] font-bold leading-normal">
                1
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-[375px] self-stretch"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="flex flex-col justify-center font-Poppins"
              style={{
                width: "375px",
                alignSelf: "stretch",
                background: "#F8F8F8",
                color: "#71825E",
                textAlign: "center",
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Abby Marvel
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[30px] font-bold leading-normal">
                DKI Jakarta
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[30px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                1500
              </p>
            </div>
          </div>
        </div>

        {/* Ini Juara 2 */}
        <div className="flex h-[80px] justify-between items-center self-stretch">
          <div
            className="flex w-[95px] self-stretch justify-center items-center"
            style={{ background: "#DCDCDC" }}
          >
            <div
              className="flex flex-col items-center justify-center flex-shrink-[0px] self-stretch"
              style={{
                color: "#305C7D",
                textAlign: "center",
              }}
            >
              <p className="font-Poppins text-[23px] font-bold leading-normal">
                2
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-[375px] self-stretch"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="flex flex-col justify-center font-Poppins"
              style={{
                width: "375px",
                alignSelf: "stretch",
                background: "#F8F8F8",
                color: "#71825E",
                textAlign: "center",
                fontSize: "23px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Syaripah Nur
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[23px] font-bold leading-normal">
                Jombang
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[23px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                1340
              </p>
            </div>
          </div>

        </div>

        {/* Ini Juara 3 */}
        <div className="flex h-[60px] justify-between items-center self-stretch">
          <div
            className="flex w-[95px] self-stretch justify-center items-center"
            style={{ background: "#DCDCDC" }}
          >
            <div
              className="flex flex-col items-center justify-center flex-shrink-[0px] self-stretch"
              style={{
                color: "#A07D23",
                textAlign: "center",
              }}
            >
              <p className="font-Poppins text-[20px] font-bold leading-normal">
                3
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-[375px] self-stretch"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="flex flex-col justify-center font-Poppins"
              style={{
                width: "375px",
                alignSelf: "stretch",
                background: "#F8F8F8",
                color: "#71825E",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Ammar Ash Shiddiq
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[20px] font-bold leading-normal">
                D.I. Yogyakarta
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[20px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                1310
              </p>
            </div>
          </div>

        </div>

        {/* Ini Juara 4 */}
        <div className="flex h-[50px] justify-between items-center self-stretch">
          <div
            className="flex w-[95px] self-stretch justify-center items-center"
            style={{ background: "#DCDCDC" }}
          >
            <div
              className="flex flex-col items-center justify-center flex-shrink-[0px] self-stretch"
              style={{
                color: "#000000",
                textAlign: "center",
              }}
            >
              <p className="font-Poppins text-[17px] font-bold leading-normal">
                4
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-[375px] self-stretch"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="flex flex-col justify-center font-Poppins"
              style={{
                width: "375px",
                alignSelf: "stretch",
                background: "#F8F8F8",
                color: "#71825E",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Humaira Rinjani
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[17px] font-bold leading-normal">
                DKI Jakarta
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[17px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                1300
              </p>
            </div>
          </div>

        </div>



                {/* Ini Juara 5 */}
        <div className="flex h-[50px] justify-between items-center self-stretch">
          <div
            className="flex w-[95px] self-stretch justify-center items-center"
            style={{ background: "#DCDCDC" }}
          >
            <div
              className="flex flex-col items-center justify-center flex-shrink-[0px] self-stretch"
              style={{
                color: "#000000",
                textAlign: "center",
              }}
            >
              <p className="font-Poppins text-[17px] font-bold leading-normal">
                5
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-[375px] self-stretch"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="flex flex-col justify-center font-Poppins"
              style={{
                width: "375px",
                alignSelf: "stretch",
                background: "#F8F8F8",
                color: "#71825E",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Umar Malikuli
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[17px] font-bold leading-normal">
                DKI Jakarta
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[17px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                1200
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Board;
