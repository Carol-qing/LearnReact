import React,{ Component } from 'react'
import axios from 'axios'

// 供应商组件
const GlobalContext = React.createContext()

class FilmItem extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value)=>{
            console.log(value)
          }
        }
      </GlobalContext.Consumer>
    )
  }
}

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
      <GlobalContext.Provider value={{
        call:"打电话",
        info:this.state.info,
        changeInfo:(value)=>{
          this.setState( {
            info:value
          })
        }
      }}>
        <div>
          <FilmItem/>
        </div>
      </GlobalContext.Provider>
    )
  }
}