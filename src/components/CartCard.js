import React, { useEffect, useState } from "react";

export default function CartCard({ item, setTempAmount }) {
  const { id, name, categories, size, quantity, price, photo } = item;
  const [qty, setQty] = useState(quantity);

  setTempAmount(qty * price);

  return (
    <div className="cart-card">
      <div className="photo">
        <img src={photo} alt="..." />
      </div>
      <div className="content">
        <div className="info">
          <h3>{name}</h3>
          <div className="category">
            <ul>
              {categories.map((category, idx) => {
                return <li key={idx}>{category}</li>;
              })}
            </ul>
          </div>
          <p className="size">SIZE: {size}</p>
        </div>
        <div className="quantity">
          <button
            className="decr"
            onClick={() => (qty > 1 ? setQty(qty - 1) : setQty(1))}
          >
            -
          </button>
          <input type="number" value={qty} disabled />
          <button className="incr" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
