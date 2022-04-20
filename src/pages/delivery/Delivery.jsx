import React from 'react';
import styles from './Delivery.module.css';
import Header from "../../components/Header/Header";
import {delivery, delivery2, delivery3} from "../../constant";
import Footer from "../../components/Footer/Footer";

const Delivery = () => {
    return (
        <div className={styles.deliveryPage}>
            <Header/>
            <div className={styles.delivery}>
                <div className={styles.deliveryMain}>
                    <h1>Как это работает</h1>
                </div>
                <div className={styles.deliveryBlock}>
                    {
                        delivery.map((item, number) => {
                            return (
                                <div key={number} className={styles.deliveryMap}>
                                    <div className={styles.img}>
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className={styles.title}>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className={styles.next}>
                                        <p>{item.next}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div className={styles.deliveryMain2}>
                        <h1>Доставка по городу - бесплатная</h1>
                    </div>
                </div>
                <div className={styles.deliveryBlock2}>
                    {
                        delivery2.map((item, index) => {
                            return (
                                <div key={index} className={styles.delivery2}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div className={styles.deliveryMain3}>
                        <h1>Способы оплаты</h1>
                    </div>
                </div>
                <div className={styles.deliveryBlock2}>
                    {
                        delivery3.map((item, index) => {
                            return (
                                <div key={index} className={styles.delivery2}>
                                    <img src={item.icon} alt=""/>
                                    <p>{item.payment}</p>
                                </div>)
                        })
                    }
                </div>
                <Footer/>
            </div>
        </div>
    );
};


export default Delivery;