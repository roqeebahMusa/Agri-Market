import "./Profile.css"
import success from "../../assets/cutie.jpg"
import { useNavigate } from "react-router-dom"

const Sucesspage = () => {

  const navigate = useNavigate()
  return (
    <div className='page'>
      <div className='page2'>
        <div className="curve">
            <img className="success" src={success}/>
        </div>
      <div className="page3">
        <h1>You have successfully updated your profile!</h1>
      </div>
      <button onClick={() => navigate ("/Profile")} className="back">Go back</button>
      </div>
    </div>
  )
}

export default Sucesspage