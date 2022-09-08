/*
    该文件专门用于暴露一个store对象，整个应用只有一个store
*/

import { legacy_createStore as createStore } from 'redux'

import countReducer from './count_reducer'

// 暴露store
export default createStore(countReducer)