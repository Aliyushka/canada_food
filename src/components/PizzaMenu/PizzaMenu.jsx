import React, { useEffect, useState } from 'react';
import styles from './PizzaMenu.module.css'
import PizzaBlock from "../PizzaBlock/PizzaBlock";

const PizzaMenu = () => {
    const [number, setNumber] = useState(1)

    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        setNumber(number - 1)
    }

    const [food, setFood] = useState([])

    const getFood = (foodUrl) => {
        const url = 'http://localhost:3000/' + foodUrl

        fetch(url)
            .then((response) => response.json())
            .then((data) => setFood(data))
    }

    useEffect(() => {
        getFood('pizzas')
    }, [])

    return (
        <>
            <div>
                <div className={styles.new}>
                    <div className={styles.big}>Меню</div>
                    <nav className={styles.nav}>
                        <ul>
                            <li onClick={() => getFood('pizzas')}>Пицца</li>
                            <li onClick={() => getFood('burgers')}>Бургер</li>
                            <li onClick={() => getFood('Sushi')}>Суши</li>
                            <li onClick={() => getFood('rolls')}>Роллы</li>
                            <li onClick={() => getFood('salads')}>Салаты</li>
                            <li onClick={() => getFood('deserts')}>Десерты</li>
                            <li onClick={() => getFood('drinkS')} className={styles.drinks}>Напитки</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.select}>
                    <p>Сортировать  по:</p>
                    <select>
                        <option>По умолчанию</option>
                    </select>
                </div>
                <div className={styles.eightPizzas}>
                    <div className={styles.pizzaBlock}>
                        {food.map(item => (
                            <PizzaBlock
                                number={number}
                                increment={increment}
                                decrement={decrement}
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                    <button className={styles.more}>Показать еще</button>
                </div>
            </div>
        </>

    );
};

export default PizzaMenu;