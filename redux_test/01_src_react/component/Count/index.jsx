import React,{ Component } from 'react'

export default class Count extends Component {
    state = {
        count:0
    }

    increment = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        this.setState({count:count + value*1})
    }
    subtraction = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        this.setState({count:count - value*1})
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
            <h2>当前计数wsefsdf为：{this.state.count}</h2>
            <select ref={c =>this.selectNum = c}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.subtraction}>-</button>&nbsp;
            <button onClick={this.odd}>increment if odd</button>
            <button onClick={this.sync}>increment sync</button>
        </div>
        )
    }
}