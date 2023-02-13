import  './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useState} from "react";
import NewFormInput from "../Header/NewFormInput"
const Signup = () => {

const [info, setInfo] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  role: "",
})


const handleChange = (e) => {
  setInfo({...info, [e.target.className] : e.target.info}) 
}

  const inputs = [
    {
      id: 1,
      placeholder: "First Name",
      type: "text",
      errMsg: "Name has to be at least 3 characters and not more than 18 characters and must begin with uppercase",
        required: true,
        pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,18}`
        },

        {
      id: 2,
      placeholder: "Last Name",
      type: "text",
        required: true,
        },
        
        {
          id: 3,
          placeholder: "Email",
          type: "text",
          name: "email",
          errMsg: "Your email must be Valid and ",
          required: true
       },

       {
        id: 4,
        placeholder: "Phone Number",
        type: "text",
       required: true,
          },
      
       {
        id: 5,
        placeholder: "Address",
        type: "text",
        name: "address",
      },
      
      {
        id: 6,
        placeholder: "Password",
        type: "password",
        name: "password",
        errMsg: "At least 10 characters, min 2 uppercase 2 lowercase, symbol must be included, number must also be included",
        required: true,
        value: info.password,
        pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$`
      },

      {
        id: 7,
        placeholder: "Role",
        type: "text",
        name: "Role",
        required: true,
      },
    ]

    const getInfo = (e) => {
        e.PreventDefault()
        console.log(info)
      }

      const navigate= useNavigate();
  return (
    <div className='Signup'>
      <form onSubmit={getInfo}>
         <div className='Signup-Main'>
        <div className="Sign-Text">
          <p className='sign'>SIGN UP</p>
          <p className="form">Please complete the form to register to be an Agri Market Customer</p>
        </div>
        <div className='inputField'>  
        {inputs.map((input) =>
         <NewFormInput key={input.id} {...input} handleChange={handleChange}  info={info[input.name]}/>
        )} 
        </div>
      
        <div className='Agree'>
           <div className='check'>
            <input type="Checkbox"/>
           </div>
           <div className='terms'>
            <p>I agree to  Terms of Services and Privacy Policy of Agri-Market</p>
           </div>
        </div>
        <button className='signup' onClick={() => navigate('/Profile')}>Sign up</button>
       </div>
      </form>
      
    </div>
  )

}

export default Signup