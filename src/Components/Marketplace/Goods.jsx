import React, {useState, useEffect} from 'react'
import "./Goods.css"
import axios from 'axios'
import Loading from "../Loading/Loading"
// import { Link } from 'react-router-dom'


import Swal from 'sweetalert2'
import { addToCart, total } from "../../Redux/Features";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { BsCart4 } from "react-icons/bs";



function Goods() {
    const [products, setProducts] = useState([])
    const [load, setLoad] =useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  

    async function getProducts(){
        try{
          setLoad(true)

          const res = await axios.get (`https://agri-market.onrender.com/api/product/`);
        console.log(res.data.data);
        setProducts(res.data.data)
        // dispatch(bringProducts(res.data))

        setLoad(false)

      }catch(error){
         if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
         } else if (error.request){
          console.log(error.request);
         } else{
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    }
    useEffect(() => {
        getProducts()
      }, [])

   
    
  return (  
    <div className='cards'>
        {/* Elements */}
    <div className='card-wrap'>

      {
      load? <Loading /> :
      products.map((i)=>(
    <div key={i._id} className='shadow'>
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <h4>Product Name: {i.productName}</h4>
        {/* <h5> Qty: {i.quantity} </h5> */}
        {/* <h5> Description: {i.decs}</h5> */}
        <h5> Categories: {i.categories}</h5>  
        <h4>Price :₦ {i.price}</h4>
    </div>
    <div className='Goods_decision'>
    <button className='goods_cart' 
     onClick={()=>{dispatch(addToCart(i)); dispatch(total());
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'item has been added',
          showConfirmButton: false,
          timer: 1500,
        })
      }}> Add to <BsCart4/> </button>
    <button className='goods_details' onClick={()=> navigate(`/Details/${i._id}`)} >Details</button>  
    </div>
    </div>
      ))}
     </div>
    </div>    

    
  )
}

export default Goods