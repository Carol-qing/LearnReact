import React,{ Component } from 'react'

export default class Count extends Component {
    state = {
        count:0
    }
    render() {
        return (
        <div>
                <h2>当前计数：{this.state.count}</h2>
        </div>
        )
    }
}