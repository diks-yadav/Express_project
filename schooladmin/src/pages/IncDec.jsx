import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state,action,)=>{
    console.log("action",action);
    switch(action){
        case 'increament':
            return state+1;
        case 'decreament':
            return state-1;
        case 'increament by 2':
            return state+2;    
        case 'decreament by 2':
            if(state>=2){
                return state-2;
            }
            else{
                alert("value should be greater than 2")
            }
        default:
            return state;
    }
}
export default function IncDec() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>IncDec

        <button onClick={()=>dispatch("increament")}>+</button>
        <span>{state}</span>
        <button onClick={()=>dispatch("decreament")}>-</button>
        <br />
        <button onClick={()=>dispatch("increament by 2")}>+ by 2</button>
   <br />
   <button onClick={()=>dispatch("decreament by 2")}>- by 2</button>

    </div>
  )
}
