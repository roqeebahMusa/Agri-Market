import React, {useContext, useState} from 'react'
import LoginInputs from "../Header/LoginInputs"
import "./Login.css"
import { addUser } from "../../Redux/Features"


function Login() {
  const {verifyAlert} = useContext()
  const [loader, setLoader] = useState(false)

  const [ value, setValue] = useState({
    email:"",
    password:"",
  })

  const userSign = async () => {
    await axios.post("https://agri-market.onrender.com/api/login", value)
      .then(function (res) {
        console.log(res.data)
        res.data.data.email === value.email ? dispach(addUser(res)) : null
        setLoader(false)
        if (res.data.data.verify === true) {
          res.data.data.email === value.email ? Navigate('/') : null
        } else {
          logOut()
          setLoader(false)
        }
      })
      .catch(function (error) {
        console.log(error);
        setErr(error.response.data.message)
        setLoader(false)
      });
  }

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
      {verifyAlert && <div className='verifyAlert'>
        <p>please check your Email for a verification link</p>
      </div>}
      <form className='login_wrap'  onSubmit={
          () => {
            event.preventDefault();
            userSign()
            setLoader(true)
          }}>
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
      {/* <Header /> */}

    </div>
  )
}

export default Login