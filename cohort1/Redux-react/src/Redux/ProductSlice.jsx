import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    SUCCESS:'SUCCESS',
    ERROR : 'error',
    Loading : 'LOADING'

})
const ProductSlice = createSlice({
    name: "product",
    initialState:{
        data : [],
        status: STATUSES.SUCCESS,
    },
    reducers:{
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state ,action){
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;


//middleware
export function fetchProduct(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading));
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
        }catch(error){
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
 }
