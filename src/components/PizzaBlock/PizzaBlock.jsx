import React, {useContext, useState} from 'react';
import s from './PizzaBlock.module.css'
import AppContext from "../../contex";

const PizzaBlock = (props) => {
    const {addToBasket, count, increment, decrement} = useContext(AppContext)
    const {item, total} = props
    const toggleBtn = () => {
        addToBasket(item)
    }
    return (
        <div
            key={item.id}
            className={s.mapPizza}
        >
            <div>
                <div className={s.imgPizza}>
                    <img src={item.image} alt="ph"/>
                </div>
                <div className={s.textPizza}>
                    <h1>{item.name}</h1>
                    <p className={s.title}>{item.title}</p>
                    <h3>{total}</h3>
                    <div className={s.count}>
                        <button onClick={decrement}>-</button>
                        <p>{count}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <button onClick={toggleBtn} className={s.btn}>В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;