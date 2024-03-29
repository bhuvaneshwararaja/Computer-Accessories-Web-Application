import * as actionTypes from "../constants/productsConstant"
import axios from "axios"

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})
        const {data} = await axios.get("/admin/view/");
        // console.log(data.products)
        dispatch({
            type:actionTypes.GET_PRODUCTS_SUCCESS,
            payload:data,
        
        })
    }
    catch(error){
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        
        })
    }
}