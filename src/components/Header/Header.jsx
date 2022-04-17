import React, {useContext} from 'react';
import logo from '../../media/icons/logo.svg'
import call from '../../media/icons/call.svg'
import basket from '../../media/icons/basket.svg'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import AppContext from "../../contex";

const Header = () => {
    const {card} = useContext(AppContext)
    return (
        <header className={s.menu}>
            <ul>
                <NavLink to='/'>
                    <img className={s.logo} src={logo} alt=""/>
                </NavLink>
                <div className={s.names}>
                    <li>
                        <NavLink className={s.main} to="/">
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <select className={s.menuHeader}>
                            <option value="0">Меню</option>
                            <option value="1">Бургер</option>
                            <option value="2">Суши</option>
                            <option value="3">Роллы</option>
                            <option value="4">Салаты</option>
                            <option value="4">Десерты</option>
                            <option value="6">Напитки</option>
                        </select>
                    </li>
                    <li>
                        <NavLink to="/delivery">
                            Доставка
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">
                            Контакты
                        </NavLink>
                    </li>
                    <li className={s.call}>
                        <a href="tel:+996500405988">
                            <img src={call} alt=""/>
                            <p>+996500405988</p>
                        </a>
                    </li>
                    <li className={s.count}>
                        <NavLink to="/basket">
                            <img src={basket} alt=""/>
                            <p>{card.length}</p>
                        </NavLink>
                    </li>
                </div>
            </ul>
        </header>
    );
};

export default Header;