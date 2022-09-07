// 创建”外壳“组件App
import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
  render(){
    return (
<div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><Header/></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 原生html中，靠<a></a>跳转不同的页面 */}
          {/* <a className="list-group-item" href="./about.html">About</a>
          <a className="list-group-item active" href="./home.html">Home</a> */}

          {/* 在React中靠路由链接失效切换组件 */}
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/about"/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

