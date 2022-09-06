import React,{ Component } from "react";

export default class App extends Component {
    myusername = React.createRef()
    state = {
        username:""
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myusername} value={this.state.username}
                    onChange ={(evt) =>{
                        console.log('onChange',evt.target.value)
                        console.log(this)
                        // 更新状态
                        this.setState({
                            username:evt.target.value
                        })
                    }}
                />
                <button onClick={() =>{
                    console.log(this.state.username)
                }}>登录</button>

                <button onClick={() =>{
                    console.log(this)
                    // 问题：这里的this有setState属性，不能改变状态值
                    this.setState =({
                        username:""
                    })
                    
                }}>重置</button>

                {/* 传递给子组件 */}
                {/* <Child myvalue={this.state.username}/> */}
            </div>
        )
    }
}
