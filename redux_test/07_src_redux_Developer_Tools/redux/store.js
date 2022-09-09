/*
    该文件专门用于暴露一个store对象，整个应用只有一个store
*/
// applyMiddleware用于支持异步action
import { legacy_createStore as createStore,applyMiddleware,combineReducers } from 'redux'
import countReducer from './reducers/count_reducer'
import personReducer from './reducers/person_reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// 实现数据共享
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))


// 暴露store
export default store