import React from 'react'
import "./Landcont.css"
import {useNavigate} from "react-router-dom"
// import Pou from "./pie/poult.jpg"

function Landcont(props) {
  const navigate = useNavigate()
  return (
    <div className='landcont_main'>
        <div className='landcont_img'>
            <img src={props.img} alt="" className='njio' />
        </div>
        <div className='landcont_text'>
            <h4>{props.ftext}</h4><br/>
            <p>{props.text}</p> <br/>
<div className='ghjk'><button className='vbnt'onClick={()=> navigate(props.navigate)}>{props.click}</button></div>

        </div>

    </div>
  )
}

export default Landcont