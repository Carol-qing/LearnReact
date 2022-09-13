import {useState} from 'react'

function ChildComponents1({num,children}) {
    console.log(num);
    function changeNum1(){
        console.log("Num1:");
        return `Num1的数值为${num}`
    }
    const actionNum1 = changeNum1()
    return (
        <>
            <h2>父组件</h2>
            <p>{actionNum1}</p>
            <div>{children}</div>

        </>
    )
}

function ChildComponents2(props) {
    console.log("Num2:");
    function changeNum2(){
        return `Num1的数值为${props.value}`
    }
    const actionNum2 = changeNum2()
    return (
        <>
            <h2>子组件</h2>
            <div>{actionNum2}</div>

        </>
    )
 }

 export default function Fcounter(){
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    return(
        <div>
            <button onClick={()=>{ setCount1(preCount =>preCount +1)}}>num1+1</button>
            <button onClick={()=>{ setCount2(preCount =>preCount +1)}}>num2+1</button>
            <ChildComponents1 num={count1}>
                <ChildComponents2 value={count2}/>
            </ChildComponents1>
        </div>
    )
 }

// 案例
// import {useState,useEffect} from 'react'

// export default function App() {
//     const [count,setCount] = useState(0)

//     useEffect(()=>{
//         setInterval(()=>{
//             setCount(count => count+1)
//         },5000)
//     },[])

//     function add() {
//         setCount(count => count+1)
//     }
//     return (
//         <div>
//             <h2>当前数量：{count}</h2>
//             <button onClick={add}>add+1</button>
//         </div>
//     )
// }