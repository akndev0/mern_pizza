import {productConstants,} from "../constants/productConstants";
import axios from "../../utils/axios";

export const getProducts = (page,sort,limit,fields,fieldName) => {
    return async (dispatch) => {
        try {
const res = await axios.get(`/productsfilter?page=${page}&sort=${sort}&limit=${limit}&${fields}=${fieldName}`);
//console.log(res.data.products)       
if (res.status === 200)  {
            dispatch({
                type: productConstants.GET_PRODUCTS_ALL,
                payload: res.data
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                payload: { error }
            });
        }
    } catch (error) {
       
     //  console.log(error,"error");
    }
  };
};
export const getProductsLength = (page,sort,limit,fields,fieldName) => {
    return async (dispatch) => {
        try {
        const res = await axios.get(`/productsfilter?page=${page}&sort=${sort}&limit=${limit}&${fields}=${fieldName}`);
      
     
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_LENGTH,
                payload:{productsLength: res.data.products.length}
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                payload: { error }
            });
        }
    } catch (error) {
      
     // console.log(error,"error");
    }
  };
};

export const getProductDetailsById = (payload) => {
    return async (dispatch) => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            
            res = await axios.get(`/product/${productId}`);
            
             dispatch({
                 type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                 payload: { productDetails: res.data.product }
             });

        } catch(error) {
           
             dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}