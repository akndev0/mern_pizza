import { authConstants } from "../constants/authConstants";

const authInitialState = {
  token: null,
  user: {
    _id:"",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export const authReducer = (state = authInitialState, action) => {
 

  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    
    case authConstants.LOGIN_SUCCESS:
      return  {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      
    case authConstants.LOGOUT_REQUEST:
      return  {
        ...state,
        loading: true,
      };
     
    case authConstants.LOGOUT_SUCCESS:
      return  {
        ...authInitialState,
      };
     
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case authConstants.SIGNUP_REQUEST:
      break;
    case authConstants.SIGNUP_SUCCESS:
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    
    default:
      return state;
  }
}