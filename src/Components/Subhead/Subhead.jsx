import React from 'react'
import "./Subhead.css"
import { AiOutlineHome } from "react-icons/ai";
import {useNavigate} from "react-router-dom"

function Subhead() {

    const navigate = useNavigate()
  return (
    <div className='Subheadmain'>
        <div className='subhead_wrap'>
            <p className='sunheader_test' onClick={() => navigate('/')}><AiOutlineHome fontSize={"30px"} color="#0C764C" /> 
            <p className='ome'>Home</p>
            </p>
        </div>

    </div>
  )
}

export default Subhead