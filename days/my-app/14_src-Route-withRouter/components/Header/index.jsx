import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component{
    back = ()=>{
        this.props.history.goBack()
      }
    forward = ()=>{
        this.props.history.goForward()
    }

    go =()=>{
        this.props.history.go(-2)
    }
    render() {
        return(
            <div>
            <h2>React Router Demo</h2>
            <button onClick={this.back}>Goback</button>
            <button onClick={this.forward}>GoForward</button>
            <button onClick={this.go}>Go</button>
            </div>
        )
    }
}

export default withRouter(Header)

