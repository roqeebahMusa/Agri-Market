import React, {useState} from 'react'
import "./User.css";

function UserInput(props) {
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
         />
        <span className='err'>{props.errMsg}</span>
       
    </div>
    
  )
}

export default UserInput 