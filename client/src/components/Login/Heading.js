import React from 'react'

function Heading() {
    return (
        <div class="flex h-[75px] items-center self-stretch gap-[15px] flex-col md:flex-row">
            <img src="assets/Logo.svg" class="w-[80px] h-[62px]" alt="Your Image" />
            <div class="text-[#71825E] font-poppins text-[30px] md:text-[48px] font-bold leading-[140%] w-[472px] items-center " style={{ marginBottom: '16px', textAlign: 'center' }}>
                Gotong Ruang
            </div>
        </div>
    )
}

export default Heading