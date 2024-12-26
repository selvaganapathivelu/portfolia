import {configureStore} from "@reduxjs/toolkit"
import Createcustomer from "./slice"

export const store=configureStore({
    reducer:{
        customer:Createcustomer
    }
})