import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  //To change pages without reloading the website after  using useNavigate,Used to move between pages inside a function.

  let navTo = useNavigate()

  // useStae is Used to store data inside component.(isLog = true or false)
  //So at first:false means not logged in 

  let [isLog, setIsLog] = useState(false)


  //useEffect usedto Runs code automatically when component loads.

  useEffect(() => {
    const loginSts = localStorage.getItem("isLogin") === "true";  //Get the value of "isLogin",Check if it equals "true"
    setIsLog(loginSts)   //Updates your state.
    console.log(isLog);

  },);


  //Remove localStorage (true) become false then goto home page during SIGNUP button change to  LOGOUTBUTTTON
  //localStorage is browser memory
  function doLogout() {
    localStorage.removeItem("isLogin")  //Now browser forgets user is logged in.
    console.log("isloginremove");
    setIsLog(false)  //So Navbar updates immediately:Logout → Signup

    navTo('/Signup')  //User goes to Signup page after logout
  }


  return (

    ////Link tag is Used to move between pages without reload.

    <nav className='navbar'>

      <div className="navbar-name">
     BLUE STONE
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='Collections'>Collections</Link>
        </li>
        <li className='nav-item'>


          <Link to='About'>About Us</Link>
        </li>
        <li className='nav-item'>

          {isLog ? <button onClick={doLogout}>Logout</button> : <Link to='Signup'>Signup</Link>}
        </li>
        <li>
          <Link to='Admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

