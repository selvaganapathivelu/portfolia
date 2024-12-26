import { createSlice } from "@reduxjs/toolkit"; 
// import Addcustomer from "./addCustomer";
const initialState=[]
const costomerSlice=createSlice({
    name:"add_customer",
    initialState,
    reducers:{
        Addcustomer(state,action){
            state.push(action.payload)
        }
    }
})

export const {Addcustomer}=costomerSlice.actions

export default costomerSlice.reducer