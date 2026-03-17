import React, { useEffect, useState } from "react";
import "./Collections.css";
import { getProduct } from "../Apiservices/Productapi";
import axios from "axios";


function OrnamentCards() {

  let [ornmnts, setOrnmnts] = useState([])


  let [types, setTypes] = useState([])


  let [typeProducts, setTypeProducts] = useState([]);




  //fetching types collection
  useEffect(() => {

    axios.get("http://localhost:3000/types")
      .then(res => setTypes(res.data))
      .catch(err => console.log(err)
      )



  }, [])


  //get products

  useEffect(() => {
    getProduct()
      .then(res => {
        console.log(res.data)
        setOrnmnts(res.data)
      })
      .catch(err => console.log(err))


  }, [])


  //products with matching type in new array each array element will have single product which represent each type    

  useEffect(() => {
    if (!types.length || !ornmnts.length) return;

    const result = types
      .map(typeObj =>
        ornmnts.find(prod => prod.type === typeObj.type)
      )
      .filter(Boolean); // removes undefined

    setTypeProducts(result);
  }, [types, ornmnts]);

  useEffect(() => {
    console.log(typeProducts,"hello");


  }, [typeProducts])


  //click aspecificcollection then go to their more colection






  return (
    <section className="ornaments">
      <h2 className="section-title">Our Collections</h2>

      <div className="ornament-grid">
        {ornmnts.map((item) => (
          <div  onClick={(e)=>{console.log(item)}} className="ornament-card" key={item.id}>
            <img src={item.img} alt={item.title} />
             {/* onError={(e) => e.target.src ="/vite-project/public/Allcollections.png" */}
            <div className="ornament-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {

      }
    </section>
  );
}

export default OrnamentCards;
