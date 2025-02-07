// src/cartSelectors.js

// Selector to calculate the total quantity of products in the cart
export const getTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

    