import React, { useEffect, useState } from 'react'
import { getAdmin } from '../Apiservices/Getadmin'  
import { useNavigate } from 'react-router-dom'
function Admin() {


  let [alert,setAlert]=useState(false)

  let [isAdmin,setIsAdmin]=useState(false)


  let navTo=useNavigate()
   

   let [adminDtls,setAdminDtls]=useState({})
   
   useEffect(()=>{
    getAdmin()
   .then(res=>{setAdminDtls(res.data)
    console.log(adminDtls,res.data,res);
    
   })
   .catch(err=>console.log(err)
   )
    
    
   

   },[])

    useEffect(() => {
    console.log("Updated adminDtls:", adminDtls);
  }, [adminDtls]);
    useEffect(() => {
    console.log("Updated adminDtls:", isAdmin);
  }, [isAdmin]);

     const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(e.target);   
    
    let {userName,password}=e.target 
    console.log(userName.value,adminDtls);

    if(adminDtls.userName!=userName.value||adminDtls.password!=password.value){
     
      // alert("failed yrlogin dtls")
      

     return 
    }
    
    setIsAdmin(true)
    console.log(isAdmin,"hello");


 }

  return (
    <>
    {!isAdmin&&<form onSubmit={handleSubmit}>
    <h1>Admin Page</h1>
     <input type="text" placeholder='userName'    name="userName"  /><br />
     <input type="text" placeholder='password'   name="password"/>
     <button >Login</button>
  </form>}
  {isAdmin&&<div>
    
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    
     <button  onClick={(()=>{setIsAdmin(false)})}>Admin logout</button>


    </div>}
    </>
  
  )
}

export default Admin