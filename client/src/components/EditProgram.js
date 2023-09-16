import React from 'react'
import UpperNav from './UI/Commons/UpperNav'
import EditProgramCard from './EditProgram/EditProgramCard'

function EditProgram() {
    return (
        <div class="flex justify-start items-center">
            <UpperNav />
            <EditProgramCard />
        </div >
    )
}

export default EditProgram