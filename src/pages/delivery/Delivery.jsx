import React from 'react';
import styles from './Delivery.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const Delivery = () => {

    return (

        <>
            <Header/>
            <div className={styles.delivery}>
                <p>Доставка</p>
            </div>
            <Footer/>
        </>
    );
};

export default Delivery;