import { fecthUser, fetchCart } from "../utils/fetchLocalStorageData";

const userInfo = fecthUser ();
const cartInfo = fetchCart ();

// Log to verify if the localStorage data is being fetched correctly
console.log("User Info:", fecthUser());
console.log("Cart Info:", fetchCart());

export const initialState = {
    user : userInfo ,
    foodItems : [],
    cartShow : false,
    cartItems: cartInfo,
}