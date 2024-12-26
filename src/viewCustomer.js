import React from "react";
import { deleteCustomer } from "./slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function Viewcustomer(){
    const customer = useSelector((state) => state.customer);
    const dispatch=useDispatch()
    function handleDelete(index){
     dispatch(deleteCustomer(index))
    }
    return(
        <>
        <h1>View Customer</h1>
        <ul>
        {customer.map((customer1, index) => (
          <li key={index}>
            {customer1}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </>
    )
}