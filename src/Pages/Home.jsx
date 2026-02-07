import React from 'react'

import './Home.css'

function Home() {
  const ornaments = [
  {
    id: 1,
    title: "Golden Star",
    price: "$15",
    img: "/public/Ring.png"
  },
  {
    id: 2,
    title: "Crystal Ball",
    price: "$20",
    img: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    title: "Snowflake",
    price: "$10",
    img: "https://via.placeholder.com/300x200"
  }

  
];
  return (
    <div className="container">
      <div className="home-container">
          <div className="home-content">
            <h2 className='section-title'>
              Our
              Perfect   Jewelery
            </h2>

            <p>Explore our diverse collections and choose your fav one.</p>
            <div className="home-buttons">
              <button  className='register-btn'>
                  Explore
              </button>

              
            </div>
            
          </div>
          <div className="home-img">
            <div className="home-img-wrapper">
              <div className="box-01">
                <div className="box-img">

                  {/* <img src={home} /> */}

                </div>
              </div>



            </div>
              
            </div>
      </div>
      <section className="ornaments">
      <h2 className="section-title">Our Collections</h2>

      <div className="ornament-grid">
        {ornaments.map((item) => (
          <div className="ornament-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="ornament-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  )
}

export default Home