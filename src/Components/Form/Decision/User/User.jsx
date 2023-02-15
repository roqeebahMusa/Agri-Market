import React, {useState} from 'react'
import UserInput from "../User/UserInput"
import "./User.css"
import AG from "../../../../assets/AG.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// import Header from '../../Header/Header';

function SignUp() {
  const navigate = useNavigate()

  const [ value, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    password:"",
    admin: false,
  });

    const {firstName, lastName, email, phoneNumber, location, password} = value

  // console.log(firstName, lastName, email, phoneNumber)
 
 

  const inputs = [{
    id:1,
    placeholder: "First Name",
    type: "text",
    name: "firstName",
    // value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
{
  id:2,
  placeholder: "Last Name",
  type: "text",
  name:"lastName",
  required: true,
},
{
  id:3,
  placeholder: "Email",
  type: "text",
  name:"email",
  required: true,
  errMsg:"Must be a valid email",
},
{
  id: 4,
  placeholder: "Phone Number",
  type:"number",
  name: "phoneNumber",
  required: true,
},

  {
    id:5,
    placeholder: "Location",
    type: "text",
    name: "location",
    required: true,
  },

  {
  id:6,
  placeholder: "Password",
  type: "password",
  name:"password",
  // value: value.password,
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$` 
  },

]

const handleSubmit = async (event) => {
  try {
    event.preventDefault();
  console.log("Created")
    const response = await axios.post("https://agri-market.onrender.com/api/user", {firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, location: location,  password:  password});
    console.log(response);
    navigate ('/Login')
  } catch (error) {

  }
};


const handleChange=(i)=>{
  setValues({...value, [i.target.name]:i.target.value})
}

const receiveValues =(i)=>{
  i.preventDefault();
  console.log(value)
}




  return (
    
    <div className='sign_main'>
{/* <Header /> */}

      <form onSubmit={receiveValues} className='sign_form'>
        <img src={AG} alt="" className='signlogo' />
      <div className="sign_wrap_text">
        <h2>Sign up</h2><br/>
        <p fontsize="12px">Please complete the registration form to be an Agri Market Customer</p><br/>
        </div>
         <div className=" mnbv">
         
         {inputs.map((i)=>
           <UserInput key={i.id} {...i} handleChange={handleChange}
           value={value[i.name]} />
          )}
         </div>
         <div className='check_cont'>
         <input type="checkbox" onChange={() => setValues ({...value, admin:true})}/> <p className='check_text'>I agree to the Terms of service and privacy of policy of Agri market </p>
         </div>
        
        <button type='submit' className='zaw' onClick={handleSubmit}>Submit</button>
        <p>Already have an account ? <span className="signlogin" >Login</span></p>
      </form>
    </div>
  )
}

export default SignUp