import axios from "axios"

const url="http://localhost:3000/Admin"


const typeurl="http://localhost:3000/types"



const getAdmin=()=>{
    return axios.get(url)
    
}

const postType=(type)=>{
    return axios.post(typeurl,type)
}


 export {getAdmin,postType};


