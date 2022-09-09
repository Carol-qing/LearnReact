import { ADD_PERSON } from "../constant";

// 初始化状态
const initState = [{id:'001',name:'tom',age:18}]

export default function PersonReducer(preState = initState,action) { 
    const {type,data} = action
    console.log(type,data);
    // 加工状态
    switch(type) {
        case ADD_PERSON:
            return  [data,...preState]
        default:
            return preState;
    }
 }