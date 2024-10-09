import React from 'react';
import './App.css';
import {Button} from './components/Button';
import {StateHook} from './components/UseState';
import {Money} from './components/Money';

function App() {

    const Button1Foo = (sub: string, age: number, city: string) => {
        console.log(`Im ${sub}. Age: ${age}. I live in ${city}.`);
    }

    const Button2Foo = (sub: string) => {
        console.log(`Im ${sub}`)
    }

    const ButtonStupid = () => {
        console.log('Im stupid button')
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Kirill', 21, 'Moscow')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Anton')}/>
            <Button name={'Stupid Button'} callBack={ButtonStupid}/>
            <StateHook/>
            <Money/>
        </div>
    );
}

export default App;
