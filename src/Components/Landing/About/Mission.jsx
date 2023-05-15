import React from 'react'
import "./About.css"

function Mission(props) {
  return (
    <div className='About_mission'>
        <img src={props.aboutimg} alt="" className='about_img' />
        <h2 className='about-big-text'>{props.abtbigtext}</h2>
        <p className='about_small_text'>{props.abtsmalltext}</p>

    </div>
  )
}

export default Mission