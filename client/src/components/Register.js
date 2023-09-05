import React from 'react'
import Logo from './Register/Logo'
import RegisterCard from './Register/RegisterCard'

function Register() {
  return (
    <div class="flex w-[1440px] h-[1024px] justify-center items-center">
        <div class="flex w-[1440px] h-[1024px] p-[30px] justify-center items-center gap-[340px] flex-shrink-0">
            <Logo/>

            <RegisterCard/>
        </div>


    </div>
  )
}

export default Register