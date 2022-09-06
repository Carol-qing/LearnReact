import React, { useEffect, useState } from 'react'

export default function App() {
    const [count,setCount] = useState(0)
    const myRef = React.useRef()

    useEffect(()=>{
        setInterval(()=>{
            setCount(count => count+1)
        },1000)
    },[])

    function add() {
        setCount(count => count+1)
    }
    function show() {
        alert(myRef.current.value)
        console.log(myRef.current.value);
    }
    return (
        <div>
        <input type="text"  ref={myRef}/>
            <h2>当前数量：{count}</h2>
            <button onClick={add}>add+1</button>
            <button onClick={show}>提示</button>
        </div>
    )
}