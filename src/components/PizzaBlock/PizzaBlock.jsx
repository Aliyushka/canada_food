import React, {useContext, useState} from 'react';
import s from './PizzaBlock.module.css'
import AppContext from "../../contex";

const PizzaBlock = (props) => {
    const [number, setNumber] = useState(1)
    const {item} = props
    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        if (number >= 1) {
            setNumber(number - 1)
        }
    }
    const {addToBasket} = useContext(AppContext)
    const add = (item) => {
        addToBasket(item)
    }
    return (
        <div>
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
                        <h3>{item.price}</h3>
                        <div className={s.count}>
                            <button onClick={decrement}>-</button>
                            <p>{number}</p>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={() => add(item)} className={s.btn}>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;