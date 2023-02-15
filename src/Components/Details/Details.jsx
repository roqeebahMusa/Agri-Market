import React, {useEffect, useState} from 'react'
import "./Details.css";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { addToCart, total } from "../../Redux/Features";


 
const Details = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [item, setItem] = useState([]);

    const getItem= async()=>{
        try{
            const res = await axios.get(`https://agri-market.onrender.com/api/product${id}`); 
            console.log(res.data.data)
            setItem(res.data.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getItem()
        console.log(item)
    }, )

  return (
    <div className="detail-holder" > 
        <div className="detail-card"  >
            <div className="detail-image">
                <div  className="image-div">
                    <img className="detail-img" src={item.image} alt=""/>
                </div>
                <div  className="image-title">
                    <h4>{item.productName}</h4>
                </div>
            </div>
            <div className="detail-details">
                <p className="detail-desc"><span>Description:</span> {item.desc}</p>
                <p className="detail-cat">Category: {item.categories}</p>
              
                <div className="detail-button" onClick={()=>{dispatch(addToCart(item)); dispatch(total());
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'item has been added',
                    showConfirmButton: false,
                    timer: 1500,
                  })
                }}>
                    Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Details