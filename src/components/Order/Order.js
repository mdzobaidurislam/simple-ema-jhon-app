import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const Order = ({ cartItems, addToCart, removeToCart, removeToCartItem }) => {
  const price = cartItems.reduce((prv, cur) => prv + cur.price * cur.qty, 0);
  const tax = price / 10;

  let shippingCost = 2;
  if (price > 335) {
    shippingCost = 0;
  } else if (price > 225) {
    shippingCost = 4.99;
  } else if (price > 0) {
    shippingCost = 12.99;
  }

  const formatNumber = (num) => {
    const precision = Math.round(num);
    return Number(precision);
  };
  // total price
  const totalPrice = formatNumber(price + shippingCost + tax);

  return (
    <div className="cartItems">
      <p>
        Cart Items: <span className="badge"> {cartItems.length}</span>{" "}
        {cartItems.length === 0 && <strong>Cart Is Empty</strong>}
      </p>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="row align-items-center">
            <div className="col-lg-2">
              <img src={item.img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 ">{item.name.slice(0, 5)}</div>
            <div className=" col-lg-3 ">
              <span className="add" onClick={() => addToCart(item)}>
                <FontAwesomeIcon icon={faPlusCircle} />
              </span>
              <span className="qty">{item.qty}</span>
              <span className="remove" onClick={() => removeToCart(item)}>
                <FontAwesomeIcon icon={faMinusCircle} />
              </span>
            </div>
            <div className="col-lg-4">
              <span className="item_price">
                {item.qty} X ${item.price} = ${item.qty * item.price}{" "}
              </span>
            </div>
            <div className="col-lg-1">
              <span
                className="removeItem"
                onClick={() => removeToCartItem(item)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <div className="mt_1">
          <div className="grand_calculation">
            <strong> Total Item Price:</strong>{" "}
            <span>${formatNumber(price)}</span>
          </div>
          <div className="grand_calculation">
            <strong> Shipping:</strong> <span>${shippingCost}</span>
          </div>
          <div className="grand_calculation">
            <strong> Tax 10%:</strong> <span>${formatNumber(tax)}</span>
          </div>
          <div className="grand_calculation">
            <strong> Total Price:</strong>{" "}
            <span>${formatNumber(totalPrice)}</span>
          </div>
          <div className="grand_calculation checkout_btn">
            <button className="add_to_cart">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
