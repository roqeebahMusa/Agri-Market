import React, {useState} from 'react'
import "./Login.css"

function LoginInputs(props) {
  const [focused, setFocused] = useState(false);

  const doFocused =()=>{
    setFocused(true)
  }
  console.log(props.handleChange)
  return (
  
    <div className="loginkkk">
        <label></label>
        <input
         type={props.type}
         name={props.name}
         onChange={props.handleChange}
         placeholder={props.placeholder}
         required={props.required}
         pattern={props.pattern}
         focus={focused.toString()}
         onBlur={doFocused}
         className="loginInput"
        />
        <span className="errr">{props.errMsg}</span>
        
    </div>
  
  )
}

export default LoginInputs