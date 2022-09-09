/*
    该文件用于汇总所有的reducer为一个总的reducer
*/
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count_reducer'
// 引入为Count组件服务的reducer
import person from './person_reducer'

// 汇总所有的reducer变为一个总的reducer实现数据共享
export default combineReducers({
    count,
    person
})