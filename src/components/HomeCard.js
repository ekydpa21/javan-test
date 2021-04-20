import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartAction";

export default function HomeCard({ product }) {
  const dispatch = useDispatch();
  const { id, name, categories, size, stock, price, photo } = product;
  const [payload, setPayload] = useState({
    id,
    name,
    categories,
    size: "",
    quantity: 1,
    price,
    photo,
  });

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <div className="home-card shadow-lg">
      <img src={photo} alt="..." />
      <h4>{name}</h4>
      {/* <div className="category">
        <ul>
          {categories.map((category, idx) => {
            return <li key={idx}>{category}</li>;
          })}
        </ul>
      </div> */}
      <div className="price-stock">
        <p>Rp {price.toLocaleString("id-ID")}</p>
        <p>{stock} left</p>
      </div>
      <button className="btn btn-primary add-to-cart" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}
