import React, {useState, useEffect} from "react";
import Footer from "../UI/Commons/Footer";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [total_point, setTotalPoint] = useState('')
  const [firstPlace, setFirstPlace] = useState('');
  const [secondPlace, setSecondPlace] = useState('');
  const [thirdPlace, setThirdPlace] = useState('');
  // const fourthAndSubsequentPlaces = dataJson.slice(3);
  const [theRest, settheRest] = useState('')
  const [fourthAndSubsequentPlaces, setFourthAndSubsequentPlaces] = useState([]); // Define here

  
  const navigate = useNavigate();

  const getLeaderboard = async() => {
    try {
      const data = await fetch("https://tiba-tiba-ngoding.vercel.app/users/leaderboard");
      const dataJson = await data.json()
  
      setFirstPlace(dataJson[0]);
      setSecondPlace(dataJson[1]);
      setThirdPlace(dataJson[2]);
      settheRest(dataJson.slice(3))

      setFourthAndSubsequentPlaces(dataJson.slice(3));

      

    } catch (error){
      console.error(error.message);
    }
  };

  // const fourthAndSubsequentPlaces = dataJson.slice(3);

  useEffect(() => {
    getLeaderboard();
  }, []);



  return (
    <div class="flex flex-col items-start">
      <div class="flex items-center justify-between w-[970px] h-[50px] text-black">
        <div class="flex flex-col items-center justify-center w-[95px] flex-shrink-[0px] self-stretch">
          <p class="text-center font-Poppins text-[15px] font-bold">Rank</p>
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
        {firstPlace && (
        <div className="flex h-100px justify-between items-center self-stretch">
          {/* Rank */}
          <div className="flex flex-col items-center justify-center h-[100px] w-[95px]">
          <div
              className="flex flex-col items-center justify-center h-[100px] flex-shrink-[0px] self-stretch"
              style={{
                color: "var(--State---Orange, #E08700)",
                textAlign: "center",
              }}
            >
              <img src="/assets/badge.png" alt="Badge" style={{ width: "30px", height: "30px" }} />
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center justify-center w-[375px] self-stretch">
            <div className="flex flex-col justify-center font-Poppins" style={{ width: "375px", alignSelf: "stretch", background: "#F8F8F8", color: "#71825E", textAlign: "center", fontSize: "30px", fontWeight: 700, lineHeight: "normal" }}>
              {firstPlace.nama}
            </div>
          </div>

          {/* Location */}
          <div className="flex w-[295px] justify-center items-center self-stretch">
            <div className="flex flex-col w-[295px] justify-center flex-shrink-0 self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[30px] font-bold leading-normal">
                {firstPlace.lokasi}
              </p>
            </div>
          </div>

          {/* Total Points */}
          <div className="flex w-[185px] justify-center items-center self-stretch">
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[30px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                {firstPlace.total_point}
              </p>
            </div>
          </div>
        </div>
      )}

        {/* Ini Juara 2 */}

        {secondPlace && (
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
              {secondPlace.nama}
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[23px] font-bold leading-normal">
                {secondPlace.lokasi}
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[23px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                {secondPlace.total_point}
              </p>
            </div>
          </div>

        </div>
        )}

        {/* Ini Juara 3 */}
        {thirdPlace && (
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
             {thirdPlace.nama}
            </div>
          </div>

          <div
            className="flex w-[295px] justify-center items-center self-stretch"
            style={{ background: "#DCDCDC" }}
          >
            <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
              <p className="text-[#71825E] text-center font-Poppins text-[20px] font-bold leading-normal">
                {thirdPlace.lokasi}
              </p>
            </div>
          </div>

          <div
            className="flex w-[185px] justify-center items-center self-stretch"
            style={{ background: "rgba(248, 248, 248, 0.97)" }}
          >
            <div className="flex flex-col w-[185px] justify-center self-stretch">
              <p className="text-[20px] font-bold text-center text-[#71825E] font-Poppins leading-normal">
                {thirdPlace.total_point}
              </p>
            </div>
          </div>

        </div>
        )}

{fourthAndSubsequentPlaces.map((place, index) => (
  <div className="flex h-[50px] justify-between items-center self-stretch" key={index}>
    {/* Rank */}
    <div className="flex w-[95px] self-stretch justify-center items-center" style={{ background: "#DCDCDC" }}>
      <div className="flex flex-col items-center justify-center flex-shrink-[0px] self-stretch">
        <p className="font-Poppins text-[17px] font-bold leading-normal">{index + 4}</p>
      </div>
    </div>

    {/* Name */}
    <div className="flex items-center justify-center w-[375px] self-stretch" style={{ background: "#F8F8F8" }}>
      <div className="flex flex-col justify-center font-Poppins" style={{ width: "375px", alignSelf: "stretch", background: "#F8F8F8", color: "#71825E", textAlign: "center", fontSize: "17px", fontWeight: 700, lineHeight: "normal" }}>
        {place.nama}
      </div>
    </div>

    {/* Location */}
    <div className="flex w-[295px] justify-center items-center self-stretch" style={{ background: "#DCDCDC" }}>
      <div className="flex flex-col w-[295px] justify-center flex-shrink-[0px] self-stretch items-center">
        <p className="text-[#71825E] text-center font-Poppins text-[17px] font-bold leading-normal">{place.lokasi}</p>
      </div>
    </div>

    {/* Total Points */}
    <div className="flex w-[185px] justify-center items-center self-stretch" style={{ background: "rgba(248, 248, 248, 0.97)" }}>
      <div className="flex flex-col w-[185px] justify-center self-stretch">
        <p className="text-[17px] font-bold text-center text-[#71825E] font-Poppins leading-normal">{place.total_point}</p>
      </div>
    </div>
  </div>
))}


        </div>
      </div>

  );
}

export default Board;
