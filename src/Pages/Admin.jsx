import React, { useEffect, useState } from 'react'
import { getAdmin, postType } from '../Apiservices/Getadmin'  
import { useNavigate } from 'react-router-dom'
import { postProduct } from '../Apiservices/Productapi'

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


    //CONTROLL REFRESHMENT

    localStorage.setItem("isAdmin","true")

 }




 function addProduct(e){
  e.preventDefault()
  let {img,title,desc,price}=e.target
  console.log(title.value);

  // create unique Id forproducts

  let id=title.value.split(" ").join("")+Date.now()%100000
  console.log(id);

  // add to a object

 let stock = Math.floor(Math.random() * 100)


  

  const product = {
    id,
    img: img.value,
    title: title.value,
    desc: desc.value,
    price: Number(price.value),
    stock
  }

  postProduct(product,"postPrdct() called")   //data post
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err)
  )
  e.target.reset()
  }
 
  //  define types

  function  addTypes(e){
    e.preventDefault()
    let currentType=e.target.currentType.value;
    postType(currentType)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)
    )
    



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
    
    <form  onSubmit={addProduct} >
       <input type=""  placeholder='img'  name='img'/><br />
       <input type="text"  placeholder='title'  name='title'/><br />
       <textarea type="text"  placeholder='desc' name='desc' /><br />
       <input type="text"  placeholder='price'  name='price'/><br />
       <button>Add</button>
    </form>
    
     <button  onClick={(()=>{setIsAdmin(false)})}>Admin logout</button>
     
     

     <h1>TYPE OF ORNAMENTS</h1>
      
     <form onSubmit={addTypes}>
       <input type="text" name='currentType'/><br />
       <button>TYPES</button>



     </form>

    </div>}
    </>
  
  )
}

export default Admin