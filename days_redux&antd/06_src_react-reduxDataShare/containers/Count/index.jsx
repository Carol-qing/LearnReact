import React,{ Component } from 'react'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

class Count extends Component {  
    state = {
        carName:'奔驰-233'
    }

    increment = () =>{
        const {value} = this.selectNum
        this.props.jia(value*1)
    }
    decrement = () =>{
        const {value} = this.selectNum
        this.props.jian(value*1)
    }
    odd = () =>{
        const {value} = this.selectNum
        const count = this.props.count
        if(count % 2 !== 0){
            this.props.jia(value*1)
        }
    }
    sync = () =>{
        const {value} = this.selectNum
        this.props.jiaAsync(value*1,500)
    }

    render() {
        // console.log('UI组件接收到的props：'+this.props.jia);
        return (
        <div>
            <h2>当前计数为：{this.props.count},下面人数为：{this.props.he}</h2>
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

export default connect(
    state =>({count:state.he,he:state.rens.length} ),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
    )(Count)

