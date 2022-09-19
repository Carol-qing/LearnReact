import React,{ useState } from 'react'
import Child from './Child';

export default function Parent(){
    const [name,setName] = useState('tom')
    const [age,setAge] = useState(25)
    const [a,setA] = useState({aa:1,bb:2})
    function Demo(){
        console.log('---父组件---');
    }
    return (
        <div>
            <h3>父组件传：{name}--{age}</h3>
            <Child value={{name,age,setAge}} callback={Demo}/>
        </div>
    )
}