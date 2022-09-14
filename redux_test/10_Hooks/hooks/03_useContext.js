import {createContext,useState,useContext} from 'react'

/*
    useContext可以帮助我们跨越组件层级直接传递变量，实现共享，相当于props
*/

// 创建一个context
const MyContext = createContext()

function Com1() {
    // useContext在子组件下使用
    const {count,setCount} = useContext(MyContext)
    return(
        <div>
            当前计数：{count}<br/>
            <button onClick={()=> setCount(count+1)}>count+1</button>
        </div>
    )
}

export default function Demo(){
    const [count,setCount] = useState(0);
    return(
        <div>
            {/* <MyContext.Provider value={{}}></MyContext.Provider> 父组件要传递的值*/}
            <MyContext.Provider value={{count,setCount}}>
                <div>
                    <Com1/>
                </div>
            </MyContext.Provider>
        </div>
    )
}