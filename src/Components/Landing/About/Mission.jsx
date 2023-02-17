import React from 'react'
import "./About.css"

function Mission(props) {
  return (
    <div className='About_mission'>
        <img src={props.aboutimg} alt="" className='about_img' />
        <p className='about_small_text'>{props.abouttext}</p>

    </div>
  )
}

export default Mission