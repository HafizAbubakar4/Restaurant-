// Fetch user from localStorage
export const fecthUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" && localStorage.getItem('user') 
      ? JSON.parse(localStorage.getItem('user')) 
      : null;
    return userInfo;
  };
  
  // Fetch cart items from localStorage
  export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItems') !== "undefined" && localStorage.getItem('cartItems') 
      ? JSON.parse(localStorage.getItem('cartItems')) 
      : [];
    return cartInfo;
  };
  