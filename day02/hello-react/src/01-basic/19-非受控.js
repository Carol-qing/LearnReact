import React,{ Component } from "react";

export default class App extends Component {
    myusername = React.createRef()
    render() {
        return (
            <div>
                <input type="text" ref={this.myusername} defaultValue="xxq"/>
                <button onClick={() =>{
                    console.log(this.myusername.current.value)
                }}>登录</button>
                <button onClick={() =>{
                    this.myusername.current.value = ""
                }}>重置</button>
            </div>
        )
    }
}
