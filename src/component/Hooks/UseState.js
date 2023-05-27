import React from 'react'
import './style.css';
import { useState } from 'react';
export const UseState = () => {

    const [inc,setInc] = useState(0)

    return (
        <>
            <div className='center_div'>
                <p>{inc}</p>
                <div className='button2' onClick={()=> setInc(inc+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                <div className='button2'onClick={()=> inc > 0 ? setInc(inc-1) : setInc(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Dec
                </div>
            </div>
        </>
    )
}
