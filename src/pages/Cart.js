import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

export default function Cart() {
  const { carts, loading, error } = useSelector((state) => state.cartData);

  const [tempAmount, setTempAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  console.log(carts);
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-content-container">
        <div className="cart-list-container">
          <p className="title">Cart ({carts.length} items)</p>
          {carts &&
            carts.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  item={item}
                  tempAmount={tempAmount}
                  setTempAmount={setTempAmount}
                />
              );
            })}
        </div>
        <div className="right-container">
          <div className="amount-container">
            <div className="total-amount">
              <p className="title">The total amount of</p>
              <div className="bill">
                <p>Temporary amount</p>
                <p>$ {tempAmount}</p>
              </div>
              <div className="bill">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="bill">
                <div className="total">
                  <p>The total amount of</p>
                  <p>(Including VAT)</p>
                </div>
                <div className="amount">
                  <p>$ {tempAmount}</p>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Go To Checkout</button>
          </div>
          <div className="discount">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ background: "white", color: "black" }}
                  >
                    Add a discount code [optional]
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Input Code Here"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
