import React from "react";

const Product = (props) => {
  const { name, price, img, category, ratings } = props.product;
  return (
    <>
      <div className="card">
        <div className="thum">
          <img src={img} alt="" />
        </div>
        <h3 className="card-title">{name}</h3>
        <p className="card-price">Price:${price}</p>
        <p className="card-category">Category: {category}</p>
        <p className="card-rating">Ratings: {ratings}</p>
        <div className="button">
          <button
            onClick={() => props.addToCart(props.product)}
            className="add_to_cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
