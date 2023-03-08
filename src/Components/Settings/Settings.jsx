import React from 'react'
import './Settings.css'
import Subhead from '../Subhead/Subhead'
import {useEffect} from "react"
import Barside from '../Barside/Barside'
import {CgProfile} from 'react-icons/cg'
import Dashfooter from '../DashBoard/Dashfooter'

function Settings({props}) {


    useEffect(() => {
        props()
      }, [props])

  return (
    <>
    <Subhead />
    <div className='settings_main'>
        <div className='settings_wrap'>
        <Barside />
        <div className='settings_cont'>
            <div className='top_profile_settings'> <h3 className='setting_h3'> Profile Settings <CgProfile fontSize={"28px"}/> </h3> </div>
            <div className='settings_settings'>
                <input className="settings_input" placeholder='    first name' />
                <input className="settings_input" placeholder='    lastName' />
                <input className="settings_input" placeholder='    Email' />
                <input className="settings_input" placeholder='    Phone Number' />
                <input className="settings_input" placeholder='    Location' />
                <button className="settings_input1"> Update</button>
                

            </div>
            <div className='setttings_delete_button'>
                    <button className='settings_delete1' >Delete Account</button>

                </div>
        </div>

        </div>
    
    </div>
    <Dashfooter />
    </>
  )
}

export default Settings