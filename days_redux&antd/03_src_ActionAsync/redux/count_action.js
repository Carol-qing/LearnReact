/*
    该文件用于为Count组件生成action对象
    箭头函数想返回一个对象，在对象{}外包一个（）
*/
import {INCREMENT,DECREMENT} from './constant'

// 同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})

export const createDecrementAction = data => ({type:DECREMENT,data})

// 异步action，就是指action的值为函数,异步action中一般会调用同步action
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}