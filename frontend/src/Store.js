import { createContext, useReducer } from "react";


export const Store=createContext();

const initialState={
    isLogin:false,
    name:'',
    number:'',
    email:'',
    totalPrice:0,  
    password:Math.random().toString(6) + 'Abc#'
}


const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_PRICE':
            return{ ...state, totalPrice:action.payload }
        case 'USER_LOGIN':
          return  {...state,isLogin:action.payload}
        case 'SET_NAME':
            return  {...state,name:action.payload}
        case 'SET_PHONE':
                return  {...state,phone:action.payload}
        case 'SET_EMAIL':
                return  {...state,email:action.payload}
       
        default:
            return state
    }
}

export function StoreProvider(props){
    const [state,dispatch]=useReducer(reducer,initialState);
    const value={state,dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}