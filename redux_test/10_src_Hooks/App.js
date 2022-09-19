import React,{ Component } from 'react'
// import Count from './components/Count'
import Count from './hooks/05_useMemo'

export default class App extends Component {
  render() {
    return (
       <div>
        <Count/>
       </div>
    )
  }
}