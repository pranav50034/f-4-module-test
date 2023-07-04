import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: false,
    products : [],
    error : ""
}

const fetchReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return {...state, loading: true}

        case FETCH_SUCCESS:
            return {...state, loading: false, products: action.payload, error: ""}

        case FETCH_FAILURE:
            return {...state, loading: false, products: [], error: action.payload}

        default:
            return state
    }
}
export default fetchReducer