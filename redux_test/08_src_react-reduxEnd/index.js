import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    /*此处需要用Provider包裹App,目的是让App的后代容器组件都能接收到store */
    <Provider store={store}>
        <App/>
    </Provider>
    
)

