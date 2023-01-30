import  './Signup.css'
import Lg from "../../assets/AG.png"
import { useState } from "react";
import NewFormInput from "../Header/NewFormInput"

const Signup = () => {
const [info, setInfo] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
})

const handleChange = e => {
  setInfo({...info, [e.target.name] : e.target.info}) 
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
          errMsg: "Your email must be Valid",
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
        type: "text",
        name: "password",
        errMsg: "At least 10 characters, min 2 uppercase 2 lowercase, symbol must be included, number must also be included",
        required: true,
        pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$`
      },
    ]

    const getInfo = (e) => {
        e.PreventDefault()
        console.log(info)
      }

  return (
    <div className='Signup'>
      <form onSubmit={getInfo}>
         <div className='Signup-Main'>
        <div className='Agri'>
           <img className="Diff" src={Lg} />
        </div>
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
        <button className='signup'>Sign up</button>
       </div>
      </form>
      
    </div>
  )

}

export default Signup