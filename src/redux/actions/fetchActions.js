import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";
import axios from "axios";

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = (products) => {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const fetchAPI = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios
           .get("https://jsonplaceholder.typicode.com/posts")
           .then((response) => dispatch(fetchSuccess(response.data)))
           .catch((error) => dispatch(fetchFailure(error)));
    }
}