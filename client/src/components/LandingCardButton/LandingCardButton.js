import React from 'react'
import "./LandingCardButton.css"

function LandingCardButton({text, link}) {
  return (
    <div className='landing-card-button-container'>

        <p className='p5' style={{ color: "#fff", fontWeight: 700  }}>{text}</p>

    </div>
  )
}

export default LandingCardButton