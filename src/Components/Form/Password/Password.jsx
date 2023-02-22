import React, {useState} from 'react'
import "./Password.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useRef } from 'react'

function Password () {

  const inputRef = useRef('')

  const email = { email: inputRef.current.value }
  console.log(email.email)
  axios.post("https://agri-market.onrender.com/api/forgot", email )
  .then((res) => {
    console.log(res)
  }) .catch((e) => {
    console.log(e)
  })

  const [ passwordsent, openMail] = useState(false);
  const navigate = useNavigate();

  const forget =()=>{
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
            className="password_input"
            ref={inputRef} />) : null }

            <button className='password_button'  onClick={() => { forget() }}>
              {passwordsent ? "Open Email" :"Submit Email"} </button>
              {passwordsent === false ? null : (<p className='nomail'>Dont get a mail ? <span className='resendtext' onClick={()=> navigate('/Resetpassword')}> Resend reset link </span> </p>)}
        </div>

    </div>
  )
}

export default Password




// import axios from 'axios';

// // Make a POST request to the "forgot password" API endpoint
// axios.post('/api/forgot-password', {
//   email: 'user@example.com'
// })
// .then(function (response) {
//   // Handle the API response to ensure that the request was successful
//   if (response.status === 200) {
//     // Use Axios to send an email to the user's email address with the password reset link
//     axios.post('/api/send-email', {
//       to: 'user@example.com',
//       subject: 'Reset Your Password',
//       text: 'Please click on the following link to reset your password: ' + response.data.resetLink
//     })
//     .then(function (response) {
//       console.log('Email sent successfully');
//     })
//     .catch(function (error) {
//       console.log('Error sending email:', error);
//     });
//   } else {
//     console.log('Error:', response.data.message);
//   }
// })
// .catch(function (error) {
//   console.log('Error:', error);
// });

