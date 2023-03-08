import React from 'react'
import './Uploadproduct.css'
import Barside from '../Barside/Barside'
import {useEffect} from "react"
import Subhead from '../Subhead/Subhead'
import Addpage from '../DashBoard/Addpage'
import Dashfooter from '../DashBoard/Dashfooter'

function Uploadproduct({props}) {

    useEffect(() => {
        props()
      }, [props])

  return (
    <>
    <Subhead/>
    <div className='uploadproducts_main'>
        <div className='uploadproducts_wrap'>
            <Barside/>
            <div className='upload_cont'>
                <Addpage />

            </div>

        </div>

    </div>
    <Dashfooter />
    </>
  )
}

export default Uploadproduct