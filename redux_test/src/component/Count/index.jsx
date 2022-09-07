import React,{ Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
    state = {
        carName:'奔驰-233'
    }
    componentDidMount(){
        // 检测redux中状态的变化，只要变化就调用render
        store.subscribe(()=>{
            this.setState({})
        })
    }

    increment = () =>{
        const {value} = this.selectNum
        store.dispatch({type:'increment',data:value*1})
    }
    decrement = () =>{
        const {value} = this.selectNum
        store.dispatch({type:'decrement',data:value*1})
    }
    odd = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        if(count %2 !== 0){
            this.setState({count:count + value*1})
        }
    }
    sync = () =>{
        setTimeout(()=>{
            const {value} = this.selectNum
            const {count} = this.state
            this.setState({count:count + value*1})
        },500)
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