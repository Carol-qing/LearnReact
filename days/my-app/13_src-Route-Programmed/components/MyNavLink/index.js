import React,{ Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class App extends Component {
  render() {
    // console.log(this);
    return (
       <div>
        {/* <NavLink className='list-group-item' to={this.props.to}>{this.props.title}</NavLink> */}
        <NavLink activeClassName='list-group-item a' className='list-group-item' {...this.props}/>
       </div>
    )
  }
}