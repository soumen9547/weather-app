import React,{useState} from 'react'
import { useEffect } from 'react'
import './style.css';

export const UseEffect = () => {

    useEffect(() => {
        console.log('useEffect');
        document.title =`Chats(${inc})`;
    });
    const [inc,setInc] = useState(0);
    return (
        <>
            <div className='center_div'>
                <p>{inc}</p>
                <div className='button2' onClick={() => setInc(inc + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
            </div>
        </>
    )
}
