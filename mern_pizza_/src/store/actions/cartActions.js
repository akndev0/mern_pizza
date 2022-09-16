import axios from "../../utils/axios";
import store from "../store";
import { cartConstants } from "../constants/cartConstants";

export const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const { auth } = store.getState();
    
     
        
        const payload = {
  
          user_id:auth.user._id,
         
        
        }
    
      const res = await axios.post(`/cart/getCartItems`,payload);
      if (res.status === 200) {
        const { cartItems } = res.data;
       
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
        console.log(error);
    }
  };
};
export const addToCart = (product, value,ordertype,orderSize ) => {
   
  return async (dispatch) => {
    try {
    const {
      cart: { cartItems },
      auth,
    } = store.getState();
  
    var data=cartItems.filter((item) => item._id === product._id)[0]
   
    const qty2 = data
    ? parseInt(parseInt(data.qty) + value)
    : value;
   
    
    
    if (auth.authenticate) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const payload = {

        user_id:auth.user._id,
        cartItems: [
          {
            product: product._id,
            quantity: qty2,
            orderType:ordertype,
            orderSize:orderSize,
          },
        ],
      };
      
      const res = await axios.post(`/cart/addtocart`, payload);
      
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

   

    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  
} catch (error) {
 // console.log(error);
}
  }
};


export const removeCartItem = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
      const res = await axios.post(`/cart/removeItem`, { payload });
      if (res.status === 202) {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({
          type: cartConstants.REMOVE_CART_ITEM_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

   

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
              orderType:cartItems[key].ordertype,
              orderSize:cartItems[key].orderSize,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
         dispatch({
           type: cartConstants.ADD_TO_CART_SUCCESS,
           payload: { cartItems },
         });
      }
    }
  };
};
