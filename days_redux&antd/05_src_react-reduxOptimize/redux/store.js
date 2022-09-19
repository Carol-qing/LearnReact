/*
    该文件专门用于暴露一个store对象，整个应用只有一个store
*/
// applyMiddleware用于支持异步action
import { legacy_createStore as createStore,applyMiddleware } from 'redux'

import countReducer from './count_reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))