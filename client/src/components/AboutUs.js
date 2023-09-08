import React from 'react'
import Navbar from './UI/Commons/Navbar'
import Introduction from './AboutUs/introduction.js'
import Joinus from './AboutUs/joinus.js'
import Ourmission from './AboutUs/ourmission.js'
import Ourvalues from './AboutUs/ourvalues.js'

function CreateProgram() {
    return (
        <div class="flex justify-start items-center">
            <Navbar />
            <Introduction />
            <Joinus />
            <Ourmission />
            <Ourvalues />
        </div >
    )
}

export default CreateProgram