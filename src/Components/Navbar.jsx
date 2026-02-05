import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  let navTo = useNavigate()

  let [isLog, setIsLog] = useState(false)

  


  useEffect(() => {
    const loginSts = localStorage.getItem("isLogin") === "true";
    setIsLog(loginSts)
    console.log(isLog);

  });


  function doLogout() {
    localStorage.removeItem("isLogin")
    console.log("isloginremove");
    setIsLog(false)

    navTo('/Signup')
  }


  return (

    <nav className='navbar'>

      <div className="navbar-name">
        RASH
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