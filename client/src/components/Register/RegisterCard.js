import React, { useState } from 'react';

function RegisterCard() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleInstagram = (e) => {
    setInstagram(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleBirthdate = (e) => {
    setBirthdate(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  // TODO: Integrate this function with the backend
  const signUpButton = () => {
    console.log(email, username, phone, instagram, password, passwordConfirmation, birthdate, city);
    setEmail('');
    setUsername('');
    setPhone('');
    setInstagram('');
    setPassword('');
    setPasswordConfirmation('');
    setBirthdate('');
    setCity('');
  }

  // TODO: Integrate this function with the backend
  const ToLoginButton = () => {
    console.log('register');
  }

  return (
    <div class="flex w-[387.107px] py-[21.849px] px-[65.548px] flex-col items-center gap-[14.566px] flex-shrink-0 rounded-[14.566px] border-[0.728px] border-gray-400 bg-[#71825E]">
      <div class="h-[36.903px] text-white text-center font-dmsans text-[25.491px] font-normal leading-normal">
        Create your Account
      </div>
      <div class="flex flex-col justify-center items-center gap-[14.566px]">
        <div class="flex flex-col items-start gap-[7.283px]">
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Email Address
            </span>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Username
            </span>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Phone Number
            </span>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhone}
              placeholder="qissa@ristek.cs.ui.ac.id"
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
              value={instagram}
              onChange={handleInstagram}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Password
            </span>
            <input
              type="text"
              id="passwords"
              value={password}
              onChange={handlePassword}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
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
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              Birthdate
            </span>
            <input
              type="text"
              id="birthdate"
              value={birthdate}
              onChange={handleBirthdate}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
          <div class="flex flex-col items-start gap-[3.642px]">
            <span class="text-white font-dmsans text-[14.566px] font-bold leading-normal">
              City of Residence
            </span>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCity}
              placeholder="qissa@ristek.cs.ui.ac.id"
              className="w-[252.461px] h-[37.819px] px-[7.283px] text-[#4E5A6E] font-dm-sans text-[14.566px] font-normal rounded border-[0.728px] border-gray-400 focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
            />
          </div>
        </div>

        <button onClick={''} class="flex w-[113.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
          <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
            Sign Up
          </div>
        </button>

        <div class="flex flex-row w-[168px] h-[25px] items-center text-center justify-center font-poppins text-[12px] font-normal leading-[160%] gap-1">
          <div className="text-[#FFFFFF]">
            Have an account?
          </div>
          <button onClick={ToLoginButton} class="text-[#03B3D7]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
