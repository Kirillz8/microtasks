import React, {useState} from 'react';

export const StateHook = () => {
    // let a: number = 1
    let [state, setState] = useState(1)
    const onClickHandler = () => {
        setState(++state)
        console.log(state)
    }

    const onClickHandlerReset = () => {
        setState(0)
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>0</button>
        </div>
    );
};