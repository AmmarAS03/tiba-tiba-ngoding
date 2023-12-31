import React from 'react'
import Logo from './Register/Logo'
import RegisterCard from './Register/RegisterCard'

function Register() {
  return (
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="flex flex-col sm:flex-row w-screen h-screen p-[30px] justify-center items-center gap-[30px] sm:gap-[160px] flex-shrink-[0px]">
            <Logo/>
            <RegisterCard/>
        </div>
    </div>
  )
}

export default Register