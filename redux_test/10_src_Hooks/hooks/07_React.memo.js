
import {React,useState,useMemo, useEffect,memo} from 'react'

const  Child = memo((props)=>{ 
    console.log('改变子组件:',props);
    console.log('-------------------子组件分割线--------------------------------');
    return(
        <div>
            子组件children
        </div>
    )
 })

 export default function MyComponent() { 
    const [num,setNum] =useState(0)
    const [name,setName] =useState('mx')
    useEffect(()=>{
        setTimeout(()=>{
            setName('XX')
        },2000)
    },[])

    // 只有num改变才重新计算memoVal
    const memoVal = useMemo(()=>{
        console.log('父组件Name改变:',num);
        return num+1
    },[num])

    console.log('memo的值为:',memoVal);
    console.log('-------------------父组件分割线--------------------------------');

    return(
        <div>
            <button onClick={()=>{setNum(num+1)}}>改变子组件</button>
            <Child num={num}/>
        </div>
    )
 }

 