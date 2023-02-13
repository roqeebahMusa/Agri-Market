import React, {useState} from 'react'
import "./Password.css"
import { useNavigate } from 'react-router-dom';
// import Resetpassword from './Resetpassword';

function Password() {

  const [ passwordsent, openMail] = useState(false);
  const navigate = useNavigate();

  // var passwordsent = sentPassword()

  const handlechange =()=>{
    openMail(true)
}
    

  return (
    <div className='password_main'>
        <div className='password-wrap'>
          <h3>{passwordsent ? "Check Your Mail" :"Forgot password"}</h3><br/>
          <p className='password_text'>
            {passwordsent ? "We sent a password reset link to your mail" :"please Enter your email so we can send you reset instructions"}</p><br/>
            {passwordsent === false ? ( <input 
            placeholder='  Enter your Email' 
            type="text"
            className="password_input"/>) : null }

            <button className='password_button' onClick={handlechange}>
              {passwordsent ? "Open Email" :"Submit Email"}</button>
              {passwordsent === false ? null : (<p className='nomail'>Dont get a mail ? <span className='resendtext' onClick={()=> navigate('/Resetpassword')}> Resend reset link </span> </p>)}
        </div>

    </div>
  )
}

export default Password