import React, {useContext} from 'react'
import "./Cart.css";
import CartItems from './CartItems'
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from "../../Redux/Features";
import {ThemeContext} from "../API/Context"
import { BsCart4 } from "react-icons/bs";
import Emptycart from "./Emptycart"
import Swal from 'sweetalert2'
// import Checkout from '../Checkout/Checkout';
import {useNavigate} from "react-router-dom"
// import { useState } from 'react';


const Cart = () => {
  const navigate = useNavigate()
  const {totalAmount}=useContext(ThemeContext)
  const cart = useSelector((state) => state.Commerce.cart);
  const dispatch = useDispatch()
  // const [clear, setClear] = useState(false)

  const getResponse = JSON.parse(localStorage.getItem("response"));
// console.log(typeof(totalAmount))

// function payKorapay() {
//   window.Korapay.initialize({
//       key: "pk_test_Rt9cMuchWeNGeBw6Dbiawd2GBJJ4yFNZvznRx3NZ",
//       reference: "uruuekflufrlfe",
//       amount: (totalAmount), 
//       currency: "NGN",
//       customer: {
//         name: (getResponse.data.data.firstName).concat(getResponse.data.data.lastName),
//         email: (getResponse.data.data.email)
//       },
//       notification_url: "https://example.com/webhook"
//   });
// }
  return (
   
    <div className="Cart-Holder">
       
      {cart.length === 0 ? <Emptycart /> :<div className="Cart-Box">
      <h2>Shopping Cart</h2><br/>
      <div className="Cart-Title">
       
        <h3>Total= ₦{totalAmount}</h3>
        {/* <h4 onClick={()=> {dispatch(clearCart());Swal.fire({ */}
        <button className="clearcart" onClick={()=> {Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Clear All!'
}).then((result) => {
  if (result.isConfirmed) {dispatch(clearCart());
    Swal.fire(
      'Cleared!',
      'Your cart has been Cleared.',
      'success'
    )
  }
})}} >Clear<BsCart4/></button>
      </div>
      <div className="Cart-Items">
      {
        cart?.map((props)=>(
          <CartItems key={props._id} image={props.image} title={props.title} price={props.price} item={props} QTY={props.QTY} />
        ))
      } 
      </div><br/> <br/>
      <div className="Cart-Check">
        
      <button onClick={()=> navigate('/Checkout')} > Check Out </button>
      </div>
      </div>}
    </div>
  )
}

export default Cart



// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })