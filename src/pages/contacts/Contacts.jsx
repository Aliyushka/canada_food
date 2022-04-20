import React from 'react';
import styles from './Contacts.module.css';
import Header from "../../components/Header/Header";
import gps from "../../media/contacts/gps.png"
import Footer from "../../components/Footer/Footer";

const Contacts = () => {
    return (
        <div className={styles.contactsPage}>
            <Header/>
            <div className={styles.contacts}>
                <div className={styles.contact}>
                    <h1>Наши филиалы:</h1>
                </div>
                <div className={styles.contactsBlock}>
                    <div className={styles.address1}>
                        <h5>пр.Чуй, 217 (пер.Тоголок-Молдо)</h5>
                        <p className={styles.workingHours}> Круглосуточно</p>
                        <a href="tel:+996500405988">
                            <p className={styles.whatsApp}>+996500405988 WhatsApp</p>
                        </a>
                        <h5>ТРЦ Новый ЦУМ (food court)</h5>
                        <p className={styles.workingHours}>До 22:00</p>
                        <a href="tel:+996500405988">
                            <p className={styles.whatsApp}>+996700405988 WhatsApp</p>
                        </a>
                    </div>
                    <div className={styles.address2}>
                        <h5>Наш адрес: ул. Суюмбаева, 123</h5>
                        <p className={styles.workingHours}> Круглосуточно</p>
                        <a href="tel:+996500405988">
                            <p className={styles.whatsApp}>+996777405988 WhatsApp</p>
                        </a>
                        <h5>ТЦ Бэта Сторес 2 (главный вход)</h5>
                        <p className={styles.workingHours}> Круглосуточно</p>
                        <a href="tel:+996500405988">
                            <p className={styles.whatsApp}>+996555405988 WhatsApp</p>
                        </a>
                    </div>
                </div>
                <div className={styles.gps}>
                    <img src={gps} alt=""/>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Contacts;