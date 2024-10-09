import React from 'react';

type MoneyType = {
    banknote: string;
    value: number;
    number: string;
};

type PropsType = {
    currentMoney: MoneyType[];
    onClickHandler: (nameButton: 'All' | 'Dollars' | 'RUBLES') => void;
};

export const NewComponent = ({currentMoney, onClickHandler}: PropsType) => {
    return (
        <>
            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknote}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '55px'}}>
                <button onClick={() => onClickHandler('All')}>All</button>
                <button onClick={() => onClickHandler('RUBLES')}>Rubles</button>
                <button onClick={() => onClickHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

