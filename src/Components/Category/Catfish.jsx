import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './Catfish.css'
import Loading from "../Loading/Loading"
import Footer from "../Landing/Footer/Footer"
function Catfish() {

    const [catigory, setCategory] = useState()
  
    const [load, setLoad] = useState(false)
    
      async function getCategories() {
        setLoad(true)
        const res = await axios.get(`https://agri-market.onrender.com/api/product/fish/`)
        
        setLoad(false)
        
        setCategory(res.data.data)
      }
    
      useEffect(() => {
        getCategories()
      },[] )


  return (
    <>
    <div className='Category-Holder1'>
    <div className='Category-Item-Holder1'>
      {load? <Loading /> :catigory?.map((item) => (
        <Link key={item.id} className='Category-Place-holder1' to={`/detail/${item.id}`} >
          <div className='Category-Image-holder1'>
            <img src={item.image} alt="" className='Category-Image1' />
          </div>
          <div className='Category-Details1'>
            <p>{item.productName}</p>
            <h4> Price: ₦ {item.price}</h4>
            <h4>Quantity: {item.qty}</h4>
          </div>
        </Link>
      ))}
    </div>
  </div>
  <Footer />
  </>
  )
}

export default Catfish