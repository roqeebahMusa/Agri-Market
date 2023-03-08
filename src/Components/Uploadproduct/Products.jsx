import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Products.css'
import { bringProducts } from '../../Redux/Features'
import Loading from '../Loading/Loading'

function Products() {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [load, setLoad] =useState(false)
   const getUser=JSON.parse(localStorage.getItem("response")) 
  //  console.log("getUser", getUser.data.data._id)

  
    
  
    async function getProducts(){
      try{
        setLoad(true)
        const res = await axios.get (`https://agri-market.onrender.com/api/theadmin/${getUser.data.data._id}`)
      // console.log("res.data.data", res.data.data.products);
      setProducts(res.data.data.products)
      dispatch(bringProducts(res.data))
      
      setLoad(false)
      
    }catch(error){
      console.log(error)
   
    }
  }
  
    useEffect(() => {
      getProducts()
    }, [])

  return (
    <div className='cards'>
    <div className='card-wrap'>
      {
load? <Loading /> :
      products?.map((i)=>(
        <Link key={i._id}
         className='shad' to={`/Detail/${i._id}`} >
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <p>{i.ProductName}</p>
        <h4># {i.price}</h4>
    </div>
    </Link>
      ))}
     </div>
    </div>
   
  )
}

export default Products