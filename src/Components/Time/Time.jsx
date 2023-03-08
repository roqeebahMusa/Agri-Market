import "./Time.css"
import React, { useState } from 'react'

function Time() {
    const now = new Date().toLocaleTimeString();
    const tow = new Date().toLocaleDateString();
    const [time, setTime] = useState(now);
    const [date, setDate] = useState(tow);
    setInterval (update, 1000);

  function update(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
    const newDate = new Date().toLocaleDateString();
    setDate(newDate)
  }
  return (
    <div className="main">
       
       <b>{time}</b>
      <b>{date}</b>
      {/* <button  className="btn" onClick={update}></button> */}
       
    </div>
  )

}

export default Time