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
}]


const handleSubmit = async (event) => {


      event.preventDefault();

      axios.post("https://agri-market.onrender.com/api/login", {email, password }) 
      .then(function (res) {
        console.log(res.data)
    }).catch((e) => {
        console.log(e)
    })
      };

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
<button className="login_button"type='submit'>Login</button>
<p className="noaccount">Dont have an account ? <span className='spancolor' onClick={()=> navigate('/SignUp')}>Sign up</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login