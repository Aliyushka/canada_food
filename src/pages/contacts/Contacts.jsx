import React from 'react';
import styles from './Contacts.module.css';
import Header from "../../components/Header/Header";
import gps from "../../media/contacts/gps.png"

const Contacts = () => {
    return (
        <div className={styles.contactsMain}>
            <Header/>
            <div className={styles.contacts}>
                <div className={styles.contact}>
                    <h1>Контакты</h1>
                </div>
                <div className={styles.contactsText}>
                    <div className={styles.call}>
                        <p>Наши телефоны:</p>
                        <img src="https://dostavka312.kg/images/sekretar_02.jpg" alt=""/>
                        <p>+996312405988</p>
                        <p>+996500405988</p>
                        <p>+996555405988</p>
                    </div>
                    <div className={styles.address}>
                        <p>Наш адрес: 123 ул. Суюмбаева, Бишкек 720011</p>
                        <img src={gps} alt=""/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contacts;