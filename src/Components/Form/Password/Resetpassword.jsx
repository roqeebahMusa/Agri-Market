import React, { useState } from 'react';
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
//       <button type="submit">Reset Password</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default ResetPassword;
