import React, {useState} from 'react'
import UserInput from "../User/UserInput"
import "./User.css"
// import AG from "../../../../assets/AG.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// import Header from '../../Header/Header';

import ClipLoader from "react-spinners/ClipLoader";

function User() {
  const navigate = useNavigate()
  const [spin, setSpin] =useState(false)

  const [ value, setValues] = useState({
   firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location:"",
    password:"",
    admin: false,
  });

  
 

  const inputs = [{
    id:1,
    placeholder: " First Name",
    type: "text",
    name: "firstName",
    // value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
  {
    id:2,
    placeholder: " Last Name",
    type: "text",
    name: "lastName",
    // value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
{
  id:3,
  placeholder: "  E-mail",
  type: "text",
  name:"email",
  // value: value.email,
  errMsg: "must be a valid email",
  required: true,
},
{
  id:4,
  placeholder: "  Phone Number",
  type: "Number",
  name:"phoneNumber",
  // value: value.address,
  required: true,
  errMsg:"Must be a valid phone number",
  pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
},
{
  id: 5,
  placeholder: " Location",
  type: "text",
  name: "location",
  required: true,
},
{
  id:6,
  placeholder: "  Password",
  type: "password",
  name:"password",
  errMsg: "must all be numbers",
  // value: value.password,
  required: true,
},
]

console.log(value)
const handleSubmit = async (event) => {
  try {
    setSpin(true)
    event.preventDefault();
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }
    const response = await axios.post("https://agri-market.onrender.com/api/user", value, config);
    console.log(response);
    if(response.status === 201) {
      navigate('/Login')
    }
    
  } catch (error) {
    if(error) {
      alert(error.response.data.message)
      window.location.reload()
    }
      console.log("error message",  error)
      console.log("response error", error.response.data.message)
  }
};

// useEffect(() => {   
// }[value])
const handleChange=(i)=>{
  setValues({...value, [i.target.name]:i.target.value})
}

// const receiveValues =(i)=>{
//   i.preventDefault();
//   console.log(value)
//   window.location.reload()
// }

console.log(value)



  return (
    <div className='sign_main'>
      <form  className='sign_form' onSubmit={handleSubmit}>
        {/* <img src={Lg} alt="" className='signlogo' /> */}
      <div className="sign_wrap_text">
        <h2>User Sign Up</h2><br/>
        <p className='user_writeup'>Please complete the registration form to purchase livestock product on Agri-Market platform</p><br/>
        </div>
         <div className=" mnbv">
         
         {inputs.map((i)=>
           <UserInput key={i.id} {...i} handleChange={handleChange}
           value={value[i.name]} />
          )}
         </div>
         <div className='check_cont'>
         <input type="checkbox" onChange={() => setValues({...value, admin:false})}/> <p className='check_text'>I agree to the Terms of service and privacy of policy of Agri market </p>
         </div>
        
        <button type='submit' className='zaw'>
        {spin ? (
 <ClipLoader
 color='#ffffff'
 loading={spin}
 size={15}
 aria-label="Loading Spinner"
 data-testid="loader"
/>
              ) : 'Submit'}
        </button>

        <p>Already have an account ? <span className="signlogin" onClick={()=> navigate('/Login')}>Login</span></p>
      </form>
      {/* <button className='back' onClick={() => navigate('/Choose')}>Go Back</button> */}
    </div>
  )
}

export default User