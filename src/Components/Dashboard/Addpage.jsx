import React, { useState, useEffect, } from 'react'
import './Addpage.css'
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios'
import { useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
// import { useNavigate } from 'react-router-dom'


export default function Addpage() {
  // const navigate = useNavigate()
  const [spin, setSpin] =useState(false)
  // const [image, setImage] = useState(null)
  const [mageDB, setImageDB] = useState({ image: "" })
  const user = useSelector((state) => state.Commerce.user)
  console.log(user[0]._id)
  const [product, setProduct] = useState(
    {
      productName: "",
      Desc: "",
      image: "",
      price: "",
      productQuantity: "",
      categories: "",
      required: true,
    }
  )
  const handleChange = (event) => {
    
    const file = event.target.files[0];
    const save = URL.createObjectURL(file);
    setImageDB({ image: save });
    setProduct({ ...product, image: file });

  };

  useEffect(() => {
    console.log(product)
  }, [product])

  // useEffect(() => {
  //   props(true)
  // }, [props])

  // if(response.status === 200) {
  //   navigate('/')
  // }

  return (
    <div className='Addproduct'>
      <form className='Addproduct_left'
        onSubmit={(e) => {
          e.preventDefault()
          setSpin(true)
          console.log('cliked')
          const formData = new FormData();
          formData.append('productName', product.productName);
          formData.append('Desc', product.Desc);
          formData.append('image', product.image);
          formData.append('price', product.price);
          formData.append('productQuantity', product.productQuantity);
          formData.append('categories', product.categories);
          axios.post(`https://agri-market.onrender.com/api/product/${user[0]._id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
             }) 
            //  setSpin(false)

            .then(response => {
              
              console.log(response);
              })
              
            
            
            .catch(error => {
              console.log(error);
            });
        }}
      >

        <div className='Addproduct_left_top'>
          <div className='Addproduct_left_top_input'>
            <p>Product Name</p>
            <input required onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="productName" type="text" placeholder='Title' />
          </div>

          <p className='textarea'>Description</p>
          <textarea required onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} type="text" id="w3review" name="Desc" maxLength="40%" rows="5" cols="70">
          </textarea>

        </div>

        {/* <label className='Addproduct_left_middle'>
         <h3  className='mage'> Select Upload Image </h3> 
          <input style={{ display: 'none' }} onChange={handleChange} type='file' />
        </label> */}

        <div className='Addproduct_left_bottom'>
          <div className='Addproduct_left_bottom_input'>
            <p>Price</p>
            <input required onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="price" />
          </div>
          <div className='Addproduct_left_bottom_input'>
            <p>Stock Quantity</p>
            <input required onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="productQuantity" />
          </div>
          <div className='Addproduct_left_bottom_input'>
            <p>Categories</p>
            {/* <input required onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="categories" /> */}
             <select className="selectCati" name="categories" onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} >
              <option>poultry</option>
              <option>fishery</option>
              </select>  
          </div>
        </div>
        <button onClick={() => { console.log(product) }} className='Addproduct_right_buttom_button'> {spin ? (
 <ClipLoader
 color='#ffffff'
 loading={spin}
 size={15}
 aria-label="Loading Spinner"
 data-testid="loader"
/>
              ) : 'UPLOAD'}</button>
      </form>

      <div className='Addproduct_right'>
        <div className='Addproduct_right_top'>
          <div className='Addproduct_right_top_image1'>
            {product.image ? <img className='products_image' src={mageDB.image} alt="" /> : < FaUserCircle fontSize={200} color="#0C764C"
            />}
          </div>
        </div>
        <div className='Addproduct_right_buttom'>
          <div className='Addproduct_right_buttom_text'>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
          </div>
        </div>
        <label className='Addproduct_left_middle'>
         <h3  className='mage'> Select Upload Image </h3> 
          <input style={{ display: 'none' }} onChange={handleChange} type='file' />
        </label>
      </div>
    </div >
  )
}