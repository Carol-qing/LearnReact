import React,{ Component } from 'react'
import axios from 'axios'


export default class App extends Component {
  constructor(){
    super()
    this.state ={
      filmList:[],
      info:""
    }
    axios.get(``).then(res=>{

    })
   }
  render() {
    return (
      
        <div>

        </div>
      
    )
  }
}