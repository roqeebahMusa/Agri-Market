import React, {useState} from 'react'
import LoginInputs from "./LoginInputs"
import "./Login.css"
import AG from "../../../assets/AG.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
  

  const [ value, setValue] = useState({
    email:"",
    password:"",
  })

  const inputs = [{
    id:1,
    placeholder: "  email",
        type: "text",
        name:"E-mail",
        value: value.email,
        errMsg: "must be a valid email",
        required: true,
        
  },
{
  id:2,
  placeholder: "  Password",
  type: "password",
  name:"Password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true,
  // pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
}]


const handleSubmit = async (event) => {


      event.preventDefault();

      axios.post("https://agri-market.onrender.com/api/login", {
        email, password }) 
    navigate ('/Dashboard')
      };
  
    //   try {
    //     const response = await axios.post('https://agri-market.onrender.com/api/login', {
    //       email,
    //       password,
    //     });
  
    //     if (response.status === 200) {
    //       // console.log('Login successful.');
  
    //     }
    //   } catch (err) {
    //     // setError('Login failed.');
    //   }
    // // };




// const handleLogin = (email, password) => {
//   const response = axios.post('https://agri-market.onrender.com/api/login', {
//     email,
//     password,
//   })

// console.log(response)
// }




const handChange=(e)=>{
  setValue({...value, [e.target.name]:e.target.value})
}

  
  return (
    <div className='login_main'>
      
      <form onSubmit={handleSubmit} className='login_wrap'>
      <img src={AG} alt="" className='signlogo' />
        <div className="logim_wrap_text">
        <h2>Welcome Back</h2><br/>
        <p>Fill the information below to login to Agri-Market</p>
        </div>
        <div className='lgnp'>
        
        {inputs.map((e)=>
        <LoginInputs key={e.id} {...e}  handChange={handChange}
          onChange={(event) => setEmail(event.target.value)}
          onChange2={(event) => setPassword (event.target.value)}
        />
        )}

        <p className='forgotpass' onClick={()=> navigate('/Password')} >forgot password?</p>
<button className="login_button">Login</button>
     {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
<p className="noaccount">Dont have an account ? <span className='spancolor' onClick={()=> navigate('/SignUp')}>Sign up</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login


// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('https://api.example.com/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         console.log('Login successful.');
//         // Perform further actions, such as redirecting the user to a protected page
//       }
//     } catch (err) {
//       setError('Login failed.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//     </form>
//   );
// };

// export default LoginForm;
