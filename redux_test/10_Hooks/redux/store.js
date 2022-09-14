import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CountReducer from './reducers/count'

const store = createStore(CountReducer,applyMiddleware(thunk))

export default store