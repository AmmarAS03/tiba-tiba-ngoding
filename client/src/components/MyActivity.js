import React from 'react'
import UpperNav from './UI/Commons/UpperNav'
import Activity from './MyActivity/Activity'

function MyActivity() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
      <UpperNav />
      <Activity />
    </div>
  )
}

export default MyActivity