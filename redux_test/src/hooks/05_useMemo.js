import {useState,useMemo} from 'react'

function ChildComponents1({num,children}) {
    function changeNum1(){
        console.log(`Num1数值为:${num}`);
        return `Num1的数值为${num}`
    }
    // const actionNum1 = changeNum1()
    const actionNum1 = useMemo(()=>{return changeNum1()},[num])
    return (
        <>
            <h2>父组件</h2>
            <p>{actionNum1}</p>
            <div>{children}</div>

        </>
    )
}

function ChildComponents2(props) {
    console.log(`Num2数值为:${props.value}`);
    function changeNum2(){
        return `Num2的数值为${props.value}`
    }
    // const actionNum2 = changeNum2()
    const actionNum2 = useMemo(()=>{
        return changeNum2()
    },[props.value])
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