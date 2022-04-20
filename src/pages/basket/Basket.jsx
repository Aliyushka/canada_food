import React, {useContext} from 'react';
import s from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import AppContext from "../../contex";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Basket = () => {
    const {deleteFromBasket, card} = useContext(AppContext)
    return (
        <div className={s.basketPage}>
            <Header/>
            {card.length > 0
                ? (
                    <div className={s.main}>
                        {card.map(elem => {
                            return (
                                <div className={s.basket}>
                                    <img src={elem.image} alt={elem.name}/>
                                    <h1>{elem.name}</h1>
                                    <p className={s.title}>{elem.title}</p>
                                    <strong>{elem.price}</strong>
                                    <button onClick={() => deleteFromBasket(elem.id)}>Удалить</button>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className={s.empty}>
                        <strong>
                            Ваша корзина пуста
                        </strong>
                        <NavLink to="/">
                            <button>Добавьте что-нибудь:)</button>
                        </NavLink>
                    </div>
                )}
                <Footer/>
        </div>
    );
};

export default Basket;