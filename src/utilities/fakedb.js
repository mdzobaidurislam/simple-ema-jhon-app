// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const getStoreData = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
// decressing cart item
const removeToCartItemDecressing = (id) => {
  let carts = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    carts = JSON.parse(storedCart);
    const quantity = carts[id];

    if (quantity) {
      const newQuantity = quantity - 1;
      carts[id] = newQuantity;
    }

    // for (const findId in carts) {
    //   if (findId === id) {
    //     const newQuantity = quantity - 1;
    //     carts[id] = newQuantity;
    //     console.log(quantity, "=", newQuantity);
    //   }
    // }
    localStorage.setItem("shopping-cart", JSON.stringify(carts));
    // console.log(carts);
  }
};
// delete cart
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToDb,
  getStoreData,
  removeToCartItemDecressing,
  removeFromDb,
  deleteShoppingCart,
};
