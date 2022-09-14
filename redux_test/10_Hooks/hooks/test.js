import {useState,useMemo} from 'react'

const ChildDemo = (props)=>{
    function changeShow(){
        console.log(`父组件的数值为：${props.value}`);
        return `父组件改变为：${props.value}`;
    }
    const actionDemo = useMemo(()=>{
        return changeShow()
    },[props.value])
    return (
        <div>
            <h2>子组件</h2>
            <div>{actionDemo}</div>    
        </div>
    )
}

export default function Demo(){
    const [a,setA] = useState(()=>({text:1}))
    const addFn = ()=>{
        setA({
            text:a.text+1
        })
    }
    return(
        <div>
            <button onClick={addFn}>+1</button>
            <h1>父组件</h1>
            <div>{a.text}</div>
            <ChildDemo value={a.text}/>
        </div>
    )
}