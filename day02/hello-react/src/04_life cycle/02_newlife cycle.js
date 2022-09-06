import React,{Component} from "react";
import ReactDOM from "react-dom";
 
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

    // 若state的值任何时候都取决于props，那么可以使用此方法
    static getDerivedStateFromProps(props,state){
        console.log('Count-getDerivedStateFromProps',props,state);
        return null
    }

    getSnapshotBeforeUpdate(){
        console.log('count-getSnapshotBeforeUpdate');
        return null
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
    componentDidUpdate(preProps,preState,sanpsshot){
        console.log('count-componentDidUpdate',preProps,preState,sanpsshot);
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

export default App 