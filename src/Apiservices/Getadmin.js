import axios from "axios"

const url="http://localhost:3000/Admin"

const getAdmin=()=>{
    return axios.get(url)
}
 export {getAdmin};