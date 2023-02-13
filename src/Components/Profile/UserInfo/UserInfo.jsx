import "./UserInfo.css"
import { useNavigate } from 'react-router-dom'
import curve from "../../../assets/curve.jpg";
import  {useState} from 'react'

const UserInfo = () => {

  const navigate = useNavigate()
  const [select, setSelect] = useState();


  return (
    <div className="User">
      <div className="User2">
        <div
        className="img2Holder">
            <div className='Photo'>
         <h2 className='img'>Update Your Image</h2>
      {select && (
        <div className='imgHolder'>
        <img className='Image' alt="not found" src={URL.createObjectURL(select)} />
        <br />
        <button className='Remove' onClick={()=>setSelect(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
         </div>
  <label className='Choose'>
         <input
        type="file"
        className="file"
        onChange={(event) => {

          console.log(event.target.files[0]);

          setSelect(event.target.files[0]);

        }}/>Choose File</label>

          {/* <div className="me2">
            <div className="old">
              <img className="jpg" src={curve} />
              <h2>Upload a New Photo</h2>
               <div className='PhotoMain'>
       </div>
            </div> 
          </div>
              <button className="up">Choose File</button> */}
        </div>
        <div className="Info1">
          <div className="change">
            <h2>Change User Information here</h2>
          </div>
          <div className="Names">
            <div className="firstName">
              <p className="full">Full Name</p>
              {/* <input className="firstname"  type="text" /> */}
              <input type="text" className="firstname"/>
            </div>
            <div className="secondName">
              <p className="full">Email Address</p>
              <input className="firstname"  type="text" />
            </div>
          </div>
          <div className="add">
            <p className="address">Address</p>
            <input className="res" type="text" />
          </div>
          <div className="state">
            <div className="firstName">
              <p className="full">City</p>
              <input className="firstname"  type="text" />
            </div>
            <div className="secondName">
              <p className="full">State</p>
              <input className="firstname"  type="text" />
            </div>
          </div>
          <div className="information1">
              <button className="information">Update Information</button>
          </div>
          <button className='go' onClick={() => navigate ('/Profile')}>Go Back</button>
        
        </div>
      </div>  
    </div>
  )
}

export default UserInfo