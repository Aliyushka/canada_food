import React, {useContext, useEffect, useState} from 'react';
import styles from './MenuNewProducts.module.css'
import img from "../../media/second.svg";
import AppContext from "../../contex";

const MenuNewProducts = () => {
    const {addToBasket} = useContext(AppContext)
    const [count, setCount] = useState(0)
    const toggleBtn = (item) => {
        addToBasket(item)
    }
    const [food, setFood] = useState([])
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    const getFood = (foodUrl) => {
        const url = 'http://localhost:3001/' + foodUrl
        fetch(url)
            .then((response) => response.json())
            .then((data) => setFood(data))
    }

    useEffect(() => {
        getFood('burger')
    }, [])


    return (
        <>
            <div>
                <div className={styles.new}>
                    <div className={styles.big}>Новинки</div>
                    <nav>
                        <ul>
                            <li onClick={() => getFood('pizza')}>Пицца</li>
                            <li onClick={() => getFood('burger')}>Бургер</li>
                            <li onClick={() => getFood('sushi')}>Суши</li>
                            <li onClick={() => getFood('roll')}>Роллы</li>
                            <li onClick={() => getFood('salad')}>Салаты</li>
                            <li onClick={() => getFood('desert')}>Десерты</li>
                            <li onClick={() => getFood('drinks')} className={styles.drinks}>Напитки</li>
                        </ul>
                    </nav>

                </div>

                <div className={styles.map}>
                    {
                        food.map((item, index) => {
                            return <div className={styles.burger} key={index}>
                                <img className={styles.burgerImage} src={item.image}/>
                                <p className={styles.cheeseburger}>{item.name}</p>
                                <p className={styles.composition}>{item.desc}</p>
                                <p className={styles.price}>{item.price}</p>
                                <div className={styles.btn}>
                                    <button onClick={decrement} className={styles.minus}>-</button>
                                    <p className={styles.number}>{count}</p>
                                    <button onClick={increment} className={styles.plus}>+</button>
                                </div>
                                <button className={styles.basket} onClick={() => toggleBtn(item.name)}>В корзину</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </>

    );
};

export default MenuNewProducts;