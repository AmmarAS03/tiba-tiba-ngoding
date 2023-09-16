
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const RegisterCard = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [notelp, setNotelp] = useState("");
  const [ig, setIg] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // TODO: Integrate this function with the backend (DONE)
  const signUpButton = async (e) => {
    try {
      const body = { email, username, password, nama, lokasi, notelp, ig };
      const response = await fetch("http://localhost:5371/users/register", {
        //by default fetch itu methodnya get
        method: "POST", //diganti dari get ke post
        headers: { "Content-Type": "application/json" }, //untuk mengatur header dalam permintaan fetch, membantu server dalam memahami jenis konten yang diterima.
        body: JSON.stringify(body), //untuk mengubah objek body menjadi string JSON yang akan dikirimkan
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };


  //ini gausa integrate ke BE, ini harusnya di FE nya redirect to Login Page
  // TODO: Integrate this function with the backend
  const ToLoginButton = () => {
    console.log("register");
  };

  return (
    <div class="flex w-[387.107px] py-[21.849px] px-[65.548px] flex-col items-center gap-[14.566px] flex-shrink-0 rounded-[14.566px] border-[0.728px] border-gray-400 bg-[#71825E]">
      <div class="h-[36.903px] text-white text-center font-dmsans text-[25.491px] font-normal leading-normal">
        Create your Account
      </div>
      <div class="flex flex-col justify-center items-center gap-[14.566px]">
        <div class="flex flex-col items-start gap-[7.283px]">
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Username
            </span>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="GotongR"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Nama
            </span>
            <input
              type="text"
              id="birthdate"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Gotong Ruang"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Email Address
            </span>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="GotongRuang@gmail.com"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="passwords"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
            <button
              className="text-[#FFFFFF] font-dm-sans text-[13px] font-semibold cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Phone Number
            </span>
            <input
              type="text"
              id="phone"
              value={notelp}
              onChange={(e) => setNotelp(e.target.value)}
              placeholder="0812543XXXX"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Instagram
            </span>
            <input
              type="text"
              id="instagram"
              value={ig}
              onChange={(e) => setIg(e.target.value)}
              placeholder="gotongrng"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>

          {/* <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Password Confirmation
            </span>
            <input
              type="text"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmation}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div> */}
          <div className="flex flex-col items-start gap-[3.642px]">
            <span className="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              City of Residence
            </span>
            <select
              id="city"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            >
              <option
                value="DKI Jakarta"
                className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
              >
                DKI Jakarta
              </option>
              <option value="Banten">Banten</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
              <option value="Jawa Timur">Jawa Timur</option>
              <option value="Daerah Istimewa Yogyakarta">
                Daerah Istimewa Yogyakarta
              </option>
              <option value="Bali">Bali</option>
            </select>
          </div>
        </div>

        <button
          onClick={signUpButton}
          class="flex w-[113.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]"
        >
          <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
            Sign Up
          </div>
        </button>

        <div class="flex flex-row w-[168px] h-[25px] items-center text-center justify-center font-poppins text-[12px] font-normal leading-[160%] gap-1">

          <div className="text-[#FFFFFF]">Have an account?</div>
          <button onClick={() => navigate("/login")} class="text-[#03B3D7]">
            Login

          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
