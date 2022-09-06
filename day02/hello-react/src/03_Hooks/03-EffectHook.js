import React,{useState} from 'react'

export default function App() {
    const [count,setCount] = React.useState(0)

    React.useEffect(()=>{
        setInterval(()=>{
            setCount(count => count+1)
        },1000)
    },[])

    function add() {
        setCount(count => count+1)
    }
    return (
        <div>
            <h2>当前数量：{count}</h2>
            <button onClick={add}>add+1</button>
        </div>
    )
}