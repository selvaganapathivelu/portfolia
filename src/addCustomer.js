import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { Addcustomer as hello } from "./slice";
export default function Addcustomer(){
    const [input,setinput]=useState("")
    const dispatch=useDispatch()

    const save=()=>{
        if(input){
            dispatch(hello(input))
            setinput("")
        }
    }
    return<>
    <h1>
        add customer
    </h1>
    <input type="text" onChange={((e)=>setinput(e.target.value))} value={input}/>
    <button onClick={save}>
        Addcustomer
    </button>
    </>
}