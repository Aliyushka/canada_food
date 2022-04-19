import React from 'react';
import styles from './Delivery.module.css';
import Header from "../../components/Header/Header";



const Delivery = () => {
    return (
        <div className={styles.deliveryMain}>
            <Header/>
            <div className={styles.delivery}>
                <div className={styles.deliveryText}>
                    <h1>Условия заказа и доставки в г. Бишкек</h1>
                    <p>Минимальная сумма заказа.</p>
                    <p>Минимальная сумма заказа составляет 450 сом.</p>
                    <p>Ночная доставка</p>
                    <p>Ночная доставка осуществляется по всему городу с 22.00 до 3.00. Заказы принимаются по номеру: 3911</p>
                    <p>Минимальная сумма ночной доставки 450 сом.</p>
                    <p>Условия оплаты</p>
                    <p>Оплата производится наличными или картой (Visa, MasterCard, Union Pay, Элкарт) курьеру, при получении заказа. Также оплатить можно через электронный кошелек О!Деньги или Элсом (https://www.elsom.kg/)</p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;