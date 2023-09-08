import React from 'react'
import Navbar from './UI/Commons/Navbar'
import CreateProgramCard from './CreateProgram/CreateProgramCard'

function CreateProgram() {
    return (
        <div class="flex justify-start items-center">
            <Navbar />
            <CreateProgramCard />
        </div >
    )
}

export default CreateProgram