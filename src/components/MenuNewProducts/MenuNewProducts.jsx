import React, {useContext, useEffect, useState} from 'react';
import styles from './MenuNewProducts.module.css'
import img from "../../media/second.svg";
import AppContext from "../../contex";

const CountProducts = ({item}) => {
    const [number, setNumber] = useState(1)
    const {addToBasket} = useContext(AppContext)
    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        if (number >= 1) {
            setNumber(number - 1)
        }
    }
    const add = (item) => {
        addToBasket(item)
    }
    return <div className={styles.burger}>
        key={item.id}
        <img className={styles.burgerImage} src={item.image}/>
        <p className={styles.cheeseburger}>{item.name}</p>
        <p className={styles.composition}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <div className={styles.btn}>
            <button onClick={decrement} className={styles.minus}>-</button>
            <p className={styles.number}>{number}</p>
            <button onClick={increment} className={styles.plus}>+</button>
        </div>
        <button onClick={() => add(item)} className={styles.basket}>В корзину</button>
    </div>
}

const MenuNewProducts = () => {
    const [food, setFood] = useState([])


    const getFood = (foodUrl) => {
        const url = 'http://localhost:3000/' + foodUrl
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
                    {food.map((item, index) => (
                        <CountProducts key={index} item={item}/>
                    ))}
                </div>
            </div>
        </>

    );
};

export default MenuNewProducts;