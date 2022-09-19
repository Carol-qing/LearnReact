/*
    该文件用于为Count组件生成action对象
    箭头函数想返回一个对象，在对象{}外包一个（）
*/
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})

export const createDecrementAction = data => ({type:DECREMENT,data})