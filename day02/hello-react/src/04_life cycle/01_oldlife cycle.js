import React, { Component } from "react";
import ReactDOM from "react-dom";

// 常用钩子：
// render()
// componentDidMount()
// componentWillUnmount()

class App extends Component{
    constructor(props) {
        console.log('Count-constructor');
        super(props)
        this.state ={count:0}
    }
    add = ()=>{
        const {count} = this.state
        this.setState({count:count+1})
    }
    death =()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    force =()=>{
        console.log('Count-forcrUpdate');
        this.forceUpdate()
    }
    UNSAFE_componentWillMount(){
        console.log('Count-componentWillMount');
    }
    shouldComponentUpdate(){
        console.log('Count-shouldComponentUpdate');
        return true
    }
    componentWillUnmount(){
        console.log('Count-componentWillUnmount');
    }
    componentDidMount(){
        console.log('Count-componentDidMount');
    }
    render(){
        console.log('Count-render');
        const {count} = this.state
        return (    
            <div>
                <h2>当前数量:{count}</h2>
                <button onClick={this.add}>点击+1</button>
                <button onClick={this.death}>卸载组件</button>
                <button onClick={this.force}>强制更新</button>
            </div>
        )
    }
}

// 父组件
class A extends Component{
    state ={carName:'奥迪'}
    change = ()=>{
        this.setState({carName:'奔驰'})
    }
    render(){
        return (
            <div>
                <div>A Component</div>
                <button onClick={this.change}>change</button>
                <B carName={this.state.carName}/>
            </div>
        )
    }
}
// 子组件
class B extends Component{
    componentWillReceiveProps(props){
        console.log('B----componentWillReceiveProp',props);
    }
    render(){
        return (
            <div>I am B Component,{this.props.carName}</div>
        )
    }
}

export default App