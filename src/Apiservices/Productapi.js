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
const postProductTwo=(prdct,random)=>{   //data get
    console.log(random);
    if(!prdct.desc||!prdct.price||!prdct.stock||!prdct.img){      //default desc,price,stock
       prdct.desc="qwertyuioogvhdsbnbnskajolklakddkqodk djwjfoopdpfopfwpqw idopfofoofpf fdopofpoffpopf odpfopopf"
       prdct.price=Math.floor(Math.random()*500+50)
       prdct.stock=Math.floor(Math.random()*100+8)
    
    }
    
    return axios.post(url,prdct)
}

export {postProduct,getProduct,postProductTwo}
