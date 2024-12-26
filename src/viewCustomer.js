import React from "react";
import { useSelector } from "react-redux";
export default function Viewcustomer(){
    const customer = useSelector((state) => state.customer);


    return(
        <>
        <h1>View Customer</h1>
        <ul>
          {customer.map((customer1, index) => (
            <li key={index}>{customer1}</li>
          ))}
        </ul>
      </>
    )
}