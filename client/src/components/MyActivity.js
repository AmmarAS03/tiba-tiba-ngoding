import React from 'react'
import Navbar from './UI/Commons/Navbar'
import Activity from './MyActivity/Activity'

function MyActivity() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
      <Navbar />
      <Activity />
    </div>
  )
}

export default MyActivity