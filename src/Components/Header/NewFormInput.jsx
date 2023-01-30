import { useState } from 'react'
import '../Header/NewFormInput.css'


const NewFormInput = (props) => {

  const [main, setMain] = useState(false)

  const getMain = () => {
   setMain(true)
  }

  return (
    <div className='Formal'>
        <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        pattern={props.pattern}
        required={props.required}
        focus = {main.toString()}
        onBlur={getMain}
        onFocus={() => props.name === 'confirmpassword' && setMain (true)}/>
        <span className='err'>{props.errMsg}</span>
    </div>

  )
}


export default NewFormInput
