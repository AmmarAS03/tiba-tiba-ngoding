import React, { useState } from 'react';

function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // TODO: Integrate this function with the backend
    const loginButton = () => {
        console.log(email, password);
        setEmail('');
        setPassword('');
    }

     // TODO: Integrate this function with the backend
    const ToRegisterButton = () => {
        console.log('register');
    }

    return (
        <div class="flex flex-col justify-center items-center w-548 py-[30px] px-[90px] gap-[20px] rounded-[20px] bg-[#71825E]">
            <div class="h-[51px] text-[#FFF] text-center font-dm-sans text-[35px] font-normal self-stretch">
                Log Into your Account
            </div>
            <div class="flex flex-col justify-center items-center gap-[20px]">
                <div class="flex flex-col items-start gap-[25px]">
                    <div class="flex flex-col items-start gap-5">
                        <div class="text-white font-dm-sans text-[20px] font-bold w-[360px]">
                            Email Address
                        </div>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmail}
                            placeholder="qissa@ristek.cs.ui.ac.id"
                            className="w-full h-[50px] px-3 text-[#4E5A6E] font-dm-sans text-[20px] font-normal rounded border border-[#404040] focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
                        />
                    </div>
                    <div class="flex flex-col items-start gap-5">
                        <div class="text-white font-dm-sans text-[20px] font-bold w-[360px]">
                            Password
                        </div>
                        <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={handlePassword}
                            placeholder="********"
                            className="w-full h-[50px] px-3 text-[#4E5A6E] font-dm-sans text-[20px] font-normal rounded border border-[#404040] focus:outline-none focus:border-[#3182CE] focus:ring focus:ring-[#3182CE]"
                        />
                    </div>
                </div>
                <button onClick={loginButton} class="flex w-[113.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
                    <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                        LOGIN
                    </div>
                </button>
                <div class="flex flex-row w-[168px] h-[25px] items-center text-center justify-center font-poppins text-[12px] font-normal leading-[160%] gap-1">
                    <div className="text-[#FFFFFF]">
                        New to Gatherly?
                    </div>
                    <button onClick={ToRegisterButton} class="text-[#03B3D7]">
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginCard