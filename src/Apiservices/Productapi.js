import axios from "axios"
 

// get

const url="http://localhost:3000/products"

const  getProduct=()=>{
    return axios.get(url)
}
  
// post

const postProduct=(prdct,random)=>{   //data get
    console.log(random);
    
    return axios.post(url,prdct)
}

export {postProduct,getProduct}