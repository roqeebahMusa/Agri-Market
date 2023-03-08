import React from 'react'
import './Deleteproduct.css'
import Subhead from '../Subhead/Subhead'
import Barside from '../Barside/Barside'
import {useEffect} from "react"
import Dashfooter from '../DashBoard/Dashfooter'

function Deleteproduct({props}) {

    useEffect(() => {
        props()
      }, [props])

  return (
    <>
    <Subhead/>
    <div className='deleteMain'>
        <div className='deleteWrap'>
            <Barside />
            <div className='delete_cont'>

            </div>

        </div>

    </div>
    <Dashfooter />
    </>
  )
}

export default Deleteproduct