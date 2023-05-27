import React,{useReducer} from 'react'
import './style.css';

const  reducer = (state,action)=>{

    if(action.type === 'inc'){
        state =  state+1;
    }
    if(action.type === 'dec'){
        state = state >0 ? state -1 : 0;
    }
    return state;
}
export const UseReducer  = () => {
    const intialData = 0;
    const [state,dispatch] = useReducer(reducer,intialData);

    return (
        <>
            <div className='center_div'>
                <p>{state}</p>
                <div className='button2' onClick={() => dispatch({type:'inc'})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                <div className='button2' onClick={() => dispatch({type:'dec'})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Dec
                </div>
            </div>
        </>
    )
}
