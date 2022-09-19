import React,{ Component } from 'react'
import store from '../../redux/store'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {
    state = {
        carName:'奔驰-233'
    }

    increment = () =>{
        const {value} = this.selectNum
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () =>{
        const {value} = this.selectNum
        store.dispatch(createDecrementAction(value*1))
    }
    odd = () =>{
        const {value} = this.selectNum
        const count = store.getState()
        if(count %2 !== 0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    sync = () =>{
        const {value} = this.selectNum
        //setTimeout(()=>{
            store.dispatch(createIncrementAsyncAction(value*1,500))
        //},500)
    }

    render() {
        return (
        <div>
            <h2>当前计数为：{store.getState()}</h2>
            <select ref={c =>this.selectNum = c}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.odd}>increment if odd</button>
            <button onClick={this.sync}>increment sync</button>
        </div>
        )
    }
}