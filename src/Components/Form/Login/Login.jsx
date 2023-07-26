import React, {useState, useEffect} from 'react'
import LoginInputs from "./LoginInputs"
import "./Login.css"
import AG from "../../../assets/AG.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import Subhead from '../../Subhead/Subhead'


function Login({props}) {
  const [spin, setSpin] =useState(false)
  const [view, setView] = useState(false)
  
  const navigate = useNavigate()


  const [ value, setValue] = useState({
    email:"",
    password:"",
  })

  const inputs = [{
    id:1,
    placeholder: "  email",
        type: "text",
        name:"email",
        value: value.email,
        errMsg: "must be a valid email",
        required: true,
        
  },
{
  id:2,
  placeholder: "  Password",
  type: "password",
  name:"password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true,
  // pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
}]


const handleSubmit = async (event) => {
try{
  setSpin(true)
      event.preventDefault();
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
   const response = await axios.post("https://agri-market.onrender.com/api/login", value, config)
   localStorage.setItem("response", JSON.stringify(response));
      console.log(response);
      if(response.status === 200) {
        navigate('/')
      }
   }catch (error) {
    if(error) {
      alert(error.response.data.message)
      window.location.reload()
    }
      console.log("error message",  error)
      console.log("response error", error.response.data.message)
  }     
};

const handleChange=(e)=>{
  setValue({...value, [e.target.name]:e.target.value})
}

useEffect(() => {
  props()
}, [props])

  return (
    <>
    <Subhead />
      <div className='login_main'>
      
      <form onSubmit={handleSubmit} className='login_wrap'>
      <img src={AG} alt="" className='signlogo' />
        <div className="logim_wrap_text">
        <h2>Welcome Back</h2><br/>
        <p>Fill the information below to login to Agri-Market</p>
        </div>
        <div className='lgnp'>
        
        {inputs.map((e)=>
        <LoginInputs key={e.id} {...e} view={view} setView={setView}  handleChange={handleChange}
        value={value[e.name]} />
        )}

        <p className='forgotpass' onClick={()=> navigate('/Password')} >forgot password?</p>
<button type='submit' className="login_button" >
{spin ? (
 <ClipLoader
 color='white'
 loading={spin}
 size={18}
 aria-label="Loading Spinner"
 data-testid="loader"
/>
              ) : 'Login'}
</button>

<p className="noaccount">Dont have an account ? <span className='spancolor'onClick={()=> navigate('/Choose')} >Sign up</span></p>
        </div>
      </form>
    </div>
    </>
  
  )
}

export default Login