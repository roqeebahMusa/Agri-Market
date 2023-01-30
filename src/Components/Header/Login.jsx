import React, {useState} from 'react'
import LoginInputs from "../Header/LoginInputs"
import "./Login.css"

function Login() {

  const [ value, setValue] = useState({
    email:"",
    password:"",
  })

  const inputs = [{
    id:1,
    placeholder: "E-mail",
        type: "text",
        name:"E-mail",
        value: value.email,
        errMsg: "must be a valid email",
        required: true,
  },
{
  id:2,
  placeholder: "Password",
  type: "password",
  name:"Password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
}]

const handChange=(e)=>{
  setValue({...value, [e.target.name]:e.target.value})
}

  
  return (
    <div className='login_main'>
      
      <form className='login_wrap'>
        <div className="logim_wrap_text">
        <h2>Welcome Back</h2>
        </div>
        <div className='lgnp'>
        <p>Fill the information below to login to Agri-Market</p>
        {inputs.map((e)=>
        <LoginInputs key={e.id} {...e}  handChange={handChange}/>
        )}
<button className="login_button">Submit</button>
        </div>
           <p>forgot password?</p>
      </form>
    </div>
  )
}

export default Login