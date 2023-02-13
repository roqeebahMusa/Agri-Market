import React from 'react'
import "./Resetpassword.css"

function Resetpassword() {
  return (
    <div className='reset_main'>
      <div className='reset_wrap'> 
      <h3>Reset Password</h3>
      <p className='resetpasswordtext'>Set a new password for your profile on Agri_Market</p>

      <input
      placeholder='Set New Password'
      className='reset_input'
       />
      <input 
      placeholder='Confirm New Password'
      className='reset_input' />

      <button className='reset_button'> Reset Password </button>

      </div>
    </div>
  )
}

export default Resetpassword