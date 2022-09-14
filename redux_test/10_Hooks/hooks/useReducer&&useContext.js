import {createContext,useReducer,useContext} from 'react'

const myContext = createContext()
const initalState ={count:0}

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count +1}
        default:
            return state
    }
}

function Counter(){
    const {state,dispatch} = useContext(myContext)
    return(
        <div>
            Count:{state.count}<br/>
            <button onClick={() =>dispatch({type:'increment'})}>点击+</button>
        </div>
    )
}


export default function Demo(){
    const [state,dispatch] = useReducer(reducer,initalState)
    return(
        <div>
            <myContext.Provider value={{state,dispatch}}>
                <Counter/>
            </myContext.Provider>
        </div>
    )
}