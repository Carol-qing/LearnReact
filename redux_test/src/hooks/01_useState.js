import {React,useState} from 'react'

// const initialCount = 0 

export default function Counter() { 
    const [count,setCount] = useState(0)
   

    return (
        <>
        <h3>Count:{count}</h3>
        <button onClick={() =>setCount(preCount =>preCount +1)}>+1</button>
        </>
    )
 }