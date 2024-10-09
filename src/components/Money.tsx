import React, {useState} from 'react';
import {NewComponent} from './NewComponent';

type FilterType = 'All' | 'Dollars' | 'RUBLES'

export const Money = () => {
    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLES', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All');

    let currentMoney = money;

    if (filter === 'Dollars') currentMoney = money.filter(el => el.banknote === 'Dollars'
    )
    if (filter === 'RUBLES') currentMoney = money.filter(el => el.banknote === 'RUBLES'
    )

    const onClickHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>
        </>
    );
};