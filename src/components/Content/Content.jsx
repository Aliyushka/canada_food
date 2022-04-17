import React from 'react';
import burger from '../../media/icons/hamburger.png'
import pepsi from '../../media/icons/pepsi.png'
import next from '../../media/icons/next.svg'
import price from '../../media/icons/price.svg'
import s from './Content.module.css'

const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.description}>
                <h1 className={s.delivery}>Доставка вкусной еды <br/> до 30 минут + напиток <br/>в подарок!</h1>
                <p className={s.delivery1}>Доставим заказ вовремя и можете рассчитывать, что <br/> еда будет доставлен
                    всегда горячим и ароматным.</p>
                <div className={s.btn}>
                    <button className={s.go}>Перейти в меню</button>
                    <img src={next} alt=""/>
                </div>
            </div>
            <div className={s.images}>
                <div className={s.price}>
                    <img src={price} alt=""/>
                </div>
                <div className={s.big}>
                    <img className={s.burger} src={burger} alt=""/>
                    <img className={s.pepsi} src={pepsi} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Content;