import { createContext,useReducer } from "react";

export const Store=createContext()

const initialState={
    industry_items:[]
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_INDUSTRY':
            const newItem=action.payload;
            
          return{
          }
        
        default:
            return state
    }
}

export function StoreProvider(props){
    const [state,dispatch]=useReducer(reducer,initialState)
    const value={state,dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}