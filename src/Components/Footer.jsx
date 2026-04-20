import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box">
              <div className="logo">
                <div className="logo-img">
                  <img src="" alt="" />
                </div>
                <h2>FULL STACK</h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.</p>
          </div>
          <div className="footer-box">
             <h4 className='footer-title'>company</h4>

             <ul className='footer-links'>
                
              <li>
                  <a href="">our programs</a>
              </li>

              <li>
                <a href="">Our plan</a>
              </li>

              <li>
                  <a href="">Become a memeber</a> 
              </li>


             </ul>
          </div>
          <div className="footer-box">

            <h4 className='footer-title'>Quick links</h4>

             <ul className='footer-links'>
                
              <li>
                About Us
              </li>
                Contact Us
              <li>
                Support Us
              </li>

              

              
             </ul>

          </div>
        </div>
      </div>

        
    </footer>
  )
}

export default Footer