import React, {useState} from 'react'
import SignUpInput from "./SignUpInput";
import "./SignUp.css"
import AG from "../../../assets/AG.png"
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()

  const [ value, setValues] = useState({
    name: "",
    email: "",
    address: "",
    password:"",
    confirmPassword: "",
    admin: false,
  });
 

  const inputs = [{
    id:1,
    placeholder: "  Name",
    type: "text",
    name: "Name",
    // value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
{
  id:2,
  placeholder: "  E-mail",
  type: "text",
  name:"E-mail",
  // value: value.email,
  errMsg: "must be a valid email",
  required: true,
},
{
  id:3,
  placeholder: "  Phone Number",
  type: "Number",
  name:"phone Number",
  // value: value.address,
  required: true,
  errMsg:"Must be a valid phone number",
  pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
},
{
  id:4,
  placeholder: "  Password",
  type: "password",
  name:"Password",
  errMsg: "must all be numbers",
  // value: value.password,
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$` 
},
{
  id:5,
  placeholder: "  Confirm password",
  type: "password",
  name:"Confirm password",
  // value: value.confirmPassword,
  errMsg: "it has to match password",
  required: true,
  pattern: value.password,
}]

const handleChange=(i)=>{
  setValues({...value, [i.target.name]:i.target.value})
}

const receiveValues =(i)=>{
  i.preventDefault();
  console.log(value)
  window.location.reload()
}




  return (
    <div className='sign_main'>
      <form onSubmit={receiveValues} className='sign_form'>
        <img src={AG} alt="" className='signlogo' />
      <div className="sign_wrap_text">
        <h2>Sign up</h2><br/>
        <p fontsize="12px">Please complete the registration form to be an Agri Market Customer</p><br/>
        </div>
         <div className=" mnbv">
         
         {inputs.map((i)=>
           <SignUpInput key={i.id} {...i} handleChange={handleChange}
           value={value[i.name]} />
          )}
         </div>
         <div className='check_cont'>
         <input type="checkbox" onChange={() => setValues ({...value, admin:true})}/> <p className='check_text'>I agree to the Terms of service and privacy of policy of Agri market </p>
         </div>
        
        <button type='submit' className='zaw'>Submit</button>
        <p>Already have an account ? <span className="signlogin" onClick={()=> navigate('/Login')}>Login</span></p>
         {/* <button className='go' onClick={() => navigate ('/Choose')}>Go Back</button> */}

      </form>

    </div>
  )
}

export default SignUp