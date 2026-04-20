import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./product.css"

function Product() {
 
const [product,setProduct]=useState([])

    const {type}=useParams()
    console.log(type);


    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(res=>{
            console.log(res);
            
            setProduct(res.data)})
       
        
        .catch(console.log)
        
    },[])
  return (
    <div className='product-container'>
      {
        product.map((item,i)=>{
            return (

              type==item.type &&<div> <img src={item.img} alt="" />
               <h3>{item.title}</h3>
                <h4>{item.price}</h4>
              </div>
              
            )
        })
        }
      
    </div>
  )
}

export default Product
