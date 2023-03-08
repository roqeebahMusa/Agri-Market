import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
import './Chicken.css'
import Loading from '../Loading/Loading';
import Footer from '../Landing/Footer/Footer';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { BsCart4 } from "react-icons/bs";
import Swal from 'sweetalert2'
import { addToCart, total } from "../../Redux/Features";
// import './Goods.css'
// import Footer from '../Landing/Footer/Footer';


const Chicken = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [catigory, setCategory] = useState()
  
const [load, setLoad] = useState(false)

  async function getCategories() {
    setLoad(true)
    const res = await axios.get(`https://agri-market.onrender.com/api/product/cat/`)
    
    setLoad(false)
    
    setCategory(res.data.data)
  }

  useEffect(() => {
    getCategories()
  },[] )
  

  return (
    <>
    <div className='Category-Holder'>
      <div className='Category-Item-Holder'>
        {load? <Loading /> :catigory?.map((item) => (
          <div key={item.id} className='Category-Place-holder'  >
            <div className='Category-Image-holder'>
              <img src={item.image} alt="" className='Category-Image' />
            </div>
            <div className='Category-Details'>
              <p>{item.productName}</p>
              <h4> Price: ₦ {item.price}</h4>
              <h4>Quantity: {item.qty}</h4>
            {/* </div> */}
            <div className='Goods_decision'>
    <button className='goods_cart' 
     onClick={()=>{dispatch(addToCart(item)); dispatch(total());
      const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true, 
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'Item added successfully'
})
      }}> Add to <BsCart4/> </button>
    <button className='goods_details' onClick={()=> navigate(`/Detail/${item._id}`)} >Details</button>  
    </div>
    </div>     
      </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Chicken