import React from "react";
import "./Collections.css";

const ornaments = [
  {
    id: 1,
    title: "Golden Star",
    price: "$15",
    img: "https://via.placeholder.com/300x200"
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

function OrnamentCards() {
  return (
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
  );
}

export default OrnamentCards;
