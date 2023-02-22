import React, { useState, useEffect, } from 'react'
import './Addpage.css'
// import add from './add.png'
import { FaUserCircle } from "react-icons/fa";
// import { useDispatch } from 'react-redux'
// import { addProduct } from '../../REDUX/features'
export default function Addpage() {
  // const dispach = useDispatch()
  // const [state, setState] = useState(false)
  // const [image, setImage] = useState(null)
  const [product, setProduct] = useState(
    {
      title: "",
      description: "",
      image: "",
      price: "",
      productQuantity: "",
      categories: "",
      brand: "" ,
    }
  )
  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
   
    reader.onloadend = () => {
      setProduct(reader.result);
      setProduct({ ...product, image: reader.result });
    }
    reader.readAsDataURL(file);
  };

  useEffect(() => {
  }, [product])

  return (
    <div className='Addproduct'>
      <div className='Addproduct_left'>

        <div className='Addproduct_left_top'>
          <div className='Addproduct_left_top_input'>
            <p>Title</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="title" type="text" placeholder='Title' />
          </div>


          <p className='textarea'>description</p>
          <textarea onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} type="text" id="w3review" name="description" maxLength="40%" rows="10" cols="50">
          </textarea>

        </div>

        <label className='Addproduct_left_middle'>
          <h3 className='mage'>Image</h3>
          <input style={{ display: 'none' }} onChange={handleChange} type='file' />
        </label>

        <div className='Addproduct_left_bottom'>
          <div className='Addproduct_left_bottom_input'>
            <p>Price</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="price" />
          </div>
          <div className='Addproduct_left_bottom_input'>
            <p>Stock Quantity</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="productQuantity" />
          </div>
          <div className='Addproduct_left_bottom_input'>
            <p>Categories</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="categories" />
          </div>
        </div>
      </div>

      <div className='Addproduct_right'>
        <div className='Addproduct_right_top'>
          <div className='Addproduct_right_top_image1'>
            {product.image ? <img className='products_image' src={product.image}  alt=""/> : < FaUserCircle fontSize={200} />}
          </div>
        </div>
        <div className='Addproduct_right_buttom'>
          <div className='Addproduct_right_buttom_text'>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
          </div>
          <button onClick={() =>
            (product)} className='Addproduct_right_buttom_button'>Upload</button>
        </div>
      </div>
    </div>
  )
}