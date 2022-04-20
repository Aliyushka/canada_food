import React, {useContext} from 'react';
import s from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import AppContext from "../../contex";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import cancelIcon from '../../media/cancel.png'

const Basket = () => {
    const {deleteFromBasket, card} = useContext(AppContext)
    const totalPrice = card.reduce((total, cur) => total + cur.price, 0)
    return (
        <div className={s.basketPage}>
            <Header/>
            {card.length > 0
                ? (
                    <div className={s.main}>
                        <div>
                            <div className={s.myBasket}>
                                <h1>Ваш счет</h1>
                            </div>
                        </div>
                        <div className={s.basket}>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Наименование</th>
                                    <th>Ингредиенты</th>
                                    <th>Цена</th>
                                    <th></th>
                                </tr>
                                {card.map(elem => {
                                    return (
                                        <tr>
                                            <img className={s.img} src={elem.image} alt={elem.name}/>
                                            <td><h1>{elem.name}</h1></td>
                                            <td><p className={s.title}> {elem.title}</p></td>
                                            <td><strong>Цена: {elem.price} сом</strong></td>
                                            <td><img className={s.cancel} src={cancelIcon}
                                                     onClick={() => deleteFromBasket(elem.id)}/></td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                        <h2 style={{paddingLeft: '20px'}}>Сумма к оплате: {totalPrice}</h2>
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