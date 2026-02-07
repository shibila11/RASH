import React, { useEffect, useState } from "react";
import "./Collections.css";
import { getProduct } from "../Apiservices/Productapi";


function OrnamentCards() {

  let [ornmnts,setOrnmnts]=useState([])


  //get products

  useEffect(() => {
    getProduct()
      .then(res =>{console.log(res.data)
        setOrnmnts(res.data)
      })
      .catch(err => console.log(err))


  },[])
  

  
  return (
    <section className="ornaments">
      <h2 className="section-title">Our Collections</h2>

      <div className="ornament-grid">
        {ornmnts.map((item) => (
          <div className="ornament-card" key={item.id}>
            <img src={item.img} alt={item.title} onError={(e)=>e.target.src="/Notfound.png"} />
            <div className="ornament-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrnamentCards;
