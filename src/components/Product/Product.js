import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { name, price, img } = props.product;
  return (
    <>
      <div className="col-lg-4 mb-3">
        <div className="card">
          <div className="thum">
            <img src={img} alt="" />
          </div>
          <h3 className="card-title">{name}</h3>
          <p className="card-price">Price:${price}</p>
          <div className="button">
            <button
              onClick={() => props.addToCart(props.product)}
              className="add_to_cart"
            >
              Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
