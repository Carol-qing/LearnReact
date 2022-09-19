/*
    1.该文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
    2.reducer 函数会接收两个参数，分别是：之前的状态，动作对象
*/
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0; //初始化状态

export default function countReducer(preState = initState,action){
    console.log(preState,action);
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}