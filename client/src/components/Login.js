import React from 'react'
import Heading from './Login/Heading'
import LoginCard from './Login/LoginCard'

function Login() {
    return (
        <div class="flex justify-center items-center">
            <div class="flex p-[30px] flex-col items-start flex-1 self-stretch">
                <div class="flex p-[30px] flex-col items-center gap-[150px] flex-1 self-stretch">
                    <Heading />
                    <LoginCard />
                </div>
            </div>
        </div>
    )
}

export default Login