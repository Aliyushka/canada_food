import React, {useEffect, useState} from 'react';
import s from './Pizzas.module.css'
import PizzaBlock from '../PizzaBlock/PizzaBlock'


const Pizzas = ({addToBasket}) => {
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/pizzas')
            .then(response => response.json())
            .then(data => setPizzas(data))
    }, [])

    const [count, setCount] = useState(0)
    const addPizza = () => {
        setCount(count + 1)
    }
    const removePizza = () => {
        setCount(count - 1)
    }
    return (
        <div className={s.pizzas}>
            <div className={s.mainText}>
                <p>Сортировать по:</p>
                <select>
                    <option value="">По умолчанию</option>
                </select>
            </div>
            <div className={s.eightPizzas}>
                <div className={s.pizzaBlock}>
                    {pizzas.map(item => (
                        <PizzaBlock
                            addToBasket={addToBasket}
                            item={item}
                            key={item.id}
                            addPizza={addPizza}
                            removePizza={removePizza}
                            count={count}
                        />
                    ))}
                </div>
            </div>
            <button className={s.show}>Показать еще</button>
        </div>
    );
};

export default Pizzas;