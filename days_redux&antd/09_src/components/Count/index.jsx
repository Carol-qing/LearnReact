import React,{ Component } from 'react'

import store from '../../redux/store'
import {createIncrementAction} from '../../redux/action/count'

export default class Count extends Component {
    state = {
        num:0
    }
    increment = () =>{
        const {value} =this.count
        const count = store.getState()
        console.log(value,count);
        store.dispatch(createIncrementAction(value*1))
        
    }
    render() {
        return (
        <div>
                <h2 >当前计数：{store.getState()}</h2><br/>
                <select ref={c => {this.count = c}}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
                <button onClick={this.increment}>点击+1</button>&nbsp;
        </div>
        )
    }
}