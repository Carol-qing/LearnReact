/*
    该文件专门用于暴露一个store对象，整个应用只有一个store
*/
// applyMiddleware用于支持异步action
import { legacy_createStore as createStore,applyMiddleware } from 'redux'
// 引入redux-devtools-extension,支持开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总之后的reducer
import reducers from './reducers'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))


// 暴露store
export default store