import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style={{ background: "pink" }}>
                <button onClick={() => {
                    console.log('通过点击子传父', this.props.event)
                    console.log(this)
                    this.props.event() //调用父组件传来的回调函数
                }}>点击</button>
                <span>NavBar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow: false
    }
    handel = () => {
        console.log('父组件定义的event事件')
        this.setState( {
            isShow: !this.state.isShow
        })
      
    }
    
    render() {
        return (
            <div>
                <Navbar event={this.handel} />
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }
}