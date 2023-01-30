import  './Signup.css'
import Lg from "../../assets/AG.png"

const Signup = () => {
  return (
    <div className='Signup'>
       <div className='Signup-Main'>
        <div className='Agri'>
           <img className="Diff" src={Lg} />
        </div>
        <div className="Sign-Text">
          <p className='sign'>SIGN UP</p>
          <p className="form">Please complete the form to register to be an Agri Market Customer</p>
        </div>
        <div className="Inputs">
          <input className='Input1' type="text" placeholder='First Name'/>
        <input className='Input2' type="text" placeholder='Last Name'/>
        <input className='Input3' type="email" placeholder='Email'/>
        <input className='Input4' type="text" placeholder='Phone Number'/>
        <input className='Input5' type="text" placeholder='Address'/>
        <input className='Input6' type="text" placeholder='Password'/>
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
    </div>
  )
}

export default Signup