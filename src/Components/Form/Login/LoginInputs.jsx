import React from 'react'
import "./Login.css"

function LoginInputs(props) {
  return (
  
    <div className="loginkkk">
        <label></label>
        <input
         type={props.type}
         name={props.name}
         placeholder={props.placeholder}
         required={props.required}
         pattern={props.pattern}
         className="loginInput"
        />
        
    </div>
  
  )
}

export default LoginInputs