import React from 'react'
import UpperNav from './UI/Commons/UpperNav'
import CreateProgramCard from './CreateProgram/CreateProgramCard'

function CreateProgram() {
    return (
        <div class="flex justify-start items-center">
            <UpperNav />
            <CreateProgramCard />
        </div >
    )
}

export default CreateProgram