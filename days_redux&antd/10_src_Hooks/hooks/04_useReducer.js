/*
    useReducer是useState的替代方案，可以向子组件传递dispatch而不是会回调函数
*/
import {useReducer} from 'react'

const initalState = {count:0} 

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count +1};
        default:
            throw new Error()
    }
}

export default function Demo(){
    // 初始化值
    const [state,dispatch] = useReducer(reducer,initalState)
    return(
        <div>
            Count:{state.count}
            <button onClick={() => dispatch({type:'increment'})}>+</button>
        </div>
    )
}