import React from 'react'

export default function Child(props){
    console.log(props);
    function toParent() { 
        console.log('子组件');
     }
    return (
        <div>
            <h3>子组件接:</h3>
            {props.value.name}-{props.value.age}
            <button onClick={toParent}>子传父（改名）</button>
            <button onClick={()=>{props.value.setAge(props.value.age +1)}}>改年龄</button>
        </div>
    )
}