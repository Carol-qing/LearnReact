import { INCREMENT } from "../constant";

const initState = 0;
 
export default function countreducer (preState = initState ,action){
    console.log(preState,action);
    const {type,data} = action
    switch(type){
        case INCREMENT:
           return preState + data;
        default:
            return preState;
    }
}