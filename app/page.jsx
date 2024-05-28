import React from 'react'
import Mandates from './mandate/Mandates'
import Programs from './programs/Program'
import Tribe from './tribes/Tribe'

function page() {
  return (
    <div>
      <Mandates/>
      <Programs/>
      <Tribe/>
    </div>
  )
}

export default page
