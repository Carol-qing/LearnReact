import React,{ Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

export default class App extends Component {
  render() {
    return (
       <div>
        <Button type='primary' ghost={true} onClick={()=>{
          console.log('onclick')}}>Button1</Button>
        <Button type='primary' ghost >
        Button2
        </Button>
       </div>
    )
  }
}