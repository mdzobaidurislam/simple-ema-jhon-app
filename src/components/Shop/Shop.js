import React, { useEffect, useState } from "react";
import {
  addToDb,
  getStoreData,
  removeFromDb,
  removeToCartItemDecressing,
} from "./../../utilities/fakedb";
import Order from "../Order/Order";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // load data from local storage
  useEffect(() => {
    const storedCart = getStoreData();

    let savedCart = [];
    for (const productId in storedCart) {
      let findProduct = products.find((product) => product.id === productId);
      if (findProduct) {
        const quantity = storedCart[productId];
        findProduct.quantity = quantity;
        savedCart.push(findProduct);
      }
    }
    setCartItems(savedCart);
    console.log("local", savedCart);
  }, [products]);

  const addToCart = (product) => {
    let newCart;
    const exist = cartItems.find((item) => item.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cartItems, product];
    } else {
      const rest = cartItems.filter((item) => item.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCartItems(newCart);
    addToDb(product.id);
  };

  // removeToCart
  const removeToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity > 1) {
      const rest = cartItems.map((item) =>
        item.id === product.id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item
      );
      setCartItems(rest);
      removeToCartItemDecressing(exist.id);
    }
  };

  // delete cart item
  const removeToCartItem = (product) => {
    let newCart;
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      const restRemove = cartItems.filter((item) => item.id !== product.id);
      newCart = [...restRemove];
      setCartItems(newCart);
      removeFromDb(exist.id);
    }
  };

  return (
    <section className="shop_container">
      <div className="products_container">
        {products.slice(0, 6).map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart_container">
        <Order
          addToCart={addToCart}
          cartItems={cartItems}
          removeToCart={removeToCart}
          removeToCartItem={removeToCartItem}
        />
      </div>
    </section>
  );
};

export default Shop;
