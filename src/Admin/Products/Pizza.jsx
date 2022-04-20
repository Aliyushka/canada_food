import React from 'react';
import styles from"./Pizza.module.css"

const Pizza = () => {
    return (
        <div className={styles.table}>
            <table>
                <tr>
                    <th>Картинка</th>
                    <th>Название</th>
                    <th>Состав</th>
                    <th>Цена</th>
                    <th>+/-</th>
                </tr>
            </table>

            <table>
                <tr>
                    <td>Картинка</td>
                    <td>Название</td>
                    <td>Состав</td>
                    <td>Цена</td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default Pizza;