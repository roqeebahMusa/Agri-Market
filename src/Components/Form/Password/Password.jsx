import React, {useState} from 'react'
import "./Password.css"
import { useNavigate } from 'react-router-dom';
// import Resetpassword from './Resetpassword';

function Password() {

  const [ passwordsent, openMail] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch ('https://agri-market.onrender.com/api/forget', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          const data = await response.json();
    
          setMessage(data.message);
        } catch (error) {
          setMessage('An error occurred. Please try again later.');
        }
      };


  const handlechange =()=>{
    openMail(true)
}
    

  return (
    <div className='password_main'>
        <div onClick={handleSubmit} className='password-wrap'>
          <h3>{passwordsent ? "Check Your Mail" :"Forgot password"}</h3><br/>
          <p className='password_text'>
            {passwordsent ? "We sent a password reset link to your mail" :"please Enter your email so we can send you reset instructions"}</p><br/>
            {passwordsent === false ? ( <input 
            placeholder='  Enter your Email' 
            type="email"
            className="password_input"
            onChange={(e) => setEmail(e.target.value)}/>) : null }

            <button className='password_button' onClick={handlechange}>
              {passwordsent ? "Open Email" :"Submit Email"}</button>
              {passwordsent === false ? null : (<p className='nomail'>Dont get a mail ? <span className='resendtext' onClick={()=> navigate('/Resetpassword')}> Resend reset link </span> </p>)}
      {message && <p>{message}</p>}
       
        </div>

    </div>
  )
}

export default Password


// import React, { useState } from 'react';

// const ResetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://your-api.com/reset-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       setMessage(data.message);
//     } catch (error) {
//       setMessage('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email address"
//       />
//       <button type="submit">Send Reset Password Link</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default ResetPassword;
