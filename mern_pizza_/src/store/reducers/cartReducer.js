import  {cartConstants}  from "../constants/cartConstants";

const cartInitialState = {
    cartItems: 
      
      
      [
       
 ],
        
    
    updatingCart: false,
    error: null
};

export const cartReducer=(state = cartInitialState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
           return {
                ...state,
                updatingCart: true
            }
         
        case cartConstants.ADD_TO_CART_SUCCESS:
         return  {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
           
        case cartConstants.ADD_TO_CART_FAILURE:
            return {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
           
        case cartConstants.RESET_CART:
            return  {
                ...cartInitialState
            }
        
     default:
      return state;
     
}
}