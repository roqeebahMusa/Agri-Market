import React, {useState} from 'react'
import "./Admin.css";

function AdminInput (props) {
    const [focused, setFocused] = useState(false);

  const doFocused =()=>{
    setFocused(true)
  }

    
  return (
    <div className='tryuu'>
        
        <input className="zxc"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        pattern={props.pattern}
        required={props.required}
        focus={focused.toString()}
        onBlur={doFocused}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
         />
        <span className='err'>{props.errMsg}</span>
    </div>
    
  )
}

export default AdminInput