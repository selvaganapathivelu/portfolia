import { createSlice } from "@reduxjs/toolkit"; 
const initialState=[];
const costomerSlice=createSlice({
    name:"add_customer",
    initialState,
    reducers:{
        Addcustomer(state,action){
            state.push(action.payload)
        },
     
    }
})

export const {Addcustomer,deleteCustomer}=costomerSlice.actions

export default costomerSlice.reducer