import React from 'react';
import styles from "./Login.module.css"
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className={styles.all}>
                <div className={styles.authorization}>
                    <input className={styles.login} placeholder="Введите логин" type="text"/>
                    <br/>
                    <input className={styles.login} placeholder="Введите пароль" type="password"/>
                    <br/>
                    <NavLink to="/admin/main">
                        <button className={styles.btnb}>OK</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Login;