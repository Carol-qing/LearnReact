import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
    
)

// 监测redux中状态的改变，如果改变调用render(provider代替)
// store.subscribe(()=>{
//     root.render(<App/>)   
// })