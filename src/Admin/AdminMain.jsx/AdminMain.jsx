import React, {useEffect, useState} from 'react';
import styles from "./AdminMain.module.css"
import img from "../../media/logo.svg"
import main from "../../media/главная.svg"
import zak from "../../media/заказы.svg"
import menu from "../../media/меню.svg"
import cont from "../../media/контакты.svg"
import otz from "../../media/отзывы.svg"
import sot from "../../media/сотрудники.svg"
import search from "../../media/поиск.svg"
import blue from "../../media/колокольчик.svg"
import photo from "../../media/_header.svg"
import {NavLink} from "react-router-dom";


const AdminMain = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={img}/>
                        <p className={styles.name}>FOOD PLANET</p>
                    </div>
                    <div className={styles.navigation}>
                        <div className={styles.pod}><img src={main}/><a href="">Главная</a></div>
                        <div className={styles.pod}><img src={zak}/><a href="">Заказы</a></div>
                        <div className={styles.pod}><img src={menu}/><a href="">Меню</a></div>
                        <div className={styles.pod}><img src={cont}/><a href="">Контакты</a></div>
                        <div className={styles.pod}><img src={otz}/><a href="">Отзывы</a></div>
                        <div className={styles.pod}><img src={sot}/><a href="">Сотрудники</a></div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.dth}>
                        <div className={styles.new}>Главная</div>
                        <div className={styles.rightBottom}>
                            <img src={search}/>
                            <img className={styles.col} src={blue}/>
                            <p className={styles.user}>Jones Ferdinand</p>
                            <img src={photo}/>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <NavLink to="/admin/pizza">
                            <button className={styles.mapp}>
                                <h4>Пицца</h4>
                            </button>
                        </NavLink>
                        <button className={styles.mapp}>
                            <h4>Бургер</h4>
                        </button>
                        <button className={styles.mapp}>
                            <h4>Суши</h4>
                        </button>
                        <button className={styles.mapp}>
                            <h4>Роллы</h4>
                        </button>
                        <button className={styles.mapp}>
                            <h4>Салаты</h4>
                        </button>
                        <button className={styles.mapp}>
                            <h4>Десерты</h4>
                        </button>
                        <button className={styles.mapp}>
                            <h4>Напитки</h4>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminMain;