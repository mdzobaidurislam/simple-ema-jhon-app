import React, { useEffect, useState } from "react";
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

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      console.log("existing", exist.qty + 1);
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      const newCart = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCart);
    }
  };

  // removeToCart
  const removeToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  // delete cart item
  const removeToCartItem = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
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
          removeToCart={removeToCart}
          removeToCartItem={removeToCartItem}
          cartItems={cartItems}
        />
      </div>
    </section>
  );
};

export default Shop;
