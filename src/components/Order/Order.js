import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const Order = ({ cartItems, addToCart, removeToCart, removeToCartItem }) => {
  let total = 0;
  let shippingCost = 0;
  let quantity = 0;
  let totalQuantity = 0;
  for (const product of cartItems) {
    totalQuantity = totalQuantity + product.quantity;
    quantity = product.quantity;
    total += product.price * quantity;
    shippingCost = shippingCost + product.shipping * quantity;
  }

  const tax = total * 0.01;

  // total Price
  const totalPrice = total + shippingCost + tax;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  // total price

  return (
    <div className="cartItems">
      <p>
        Cart Items: <span className="badge"> {totalQuantity}</span>{" "}
        {cartItems.length === 0 && <strong>Cart Is Empty</strong>}
      </p>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart_item">
            {" "}
            <span className="name">{item.name.slice(0, 5)}</span>
            <p className="add_minus_qty">
              <span className="add" onClick={() => addToCart(item)}>
                <FontAwesomeIcon icon={faPlusCircle} />
              </span>
              <span className="qty">{item.quantity}</span>
              <span className="remove" onClick={() => removeToCart(item)}>
                <FontAwesomeIcon icon={faMinusCircle} />
              </span>
            </p>
            <p className="price_del_item">
              <span className="item_price">
                {item.quantity} X ${item.price} = ${item.quantity * item.price}{" "}
              </span>
              <span
                className="removeItem"
                onClick={() => removeToCartItem(item)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </p>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <div className="mt_1">
          <div className="grand_calculation">
            <strong> Total Item Price:</strong>{" "}
            <span>${formatNumber(total)}</span>
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
