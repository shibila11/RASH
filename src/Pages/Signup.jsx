import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {


  let navigateTo = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })



  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let { firstName, lastName, email, password } = formData
    if (!firstName || !lastName || !email || !password) {
      alert("complete yr details")
      return
    }

    axios.post('http://localhost:3000/users', formData)
      .then(res => {
        console.log(res.data)

        localStorage.setItem("isLogin", "true")

        navigateTo("/")

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        })
      })
      .catch(error => console.log(error))

  }


  return (
    <div className='signup-card'>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name :</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        /><br />

        <label>Last Name :</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        /><br />

        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        /><br />

        <label>Password :</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        /><br />

        <button>Sign up</button>


        <button type='button' onClick={() => { navigateTo("/Login") }}>Login</button>
      </form>
    </div>
  )
}

export default Signup
