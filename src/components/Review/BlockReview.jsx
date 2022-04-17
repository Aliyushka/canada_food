import React from 'react';
import img from '../../media/Group 32.svg'
import styles from './BlockReview.module.css'
import pen from '../../media/ручка.svg'

const BlockReview = (props) => {
    return (
        <div className={styles.parent} >
            <img src={img}/>
            <div className={styles.group}>
                <img className={styles.vector} src={props.item.image}/>
                <div className={styles.pen}>
                    <p className={styles.userName}>{props.item.user}</p>
                    <img src={pen}/>
                </div>
                <p className={styles.text}>{props.item.comment}</p>
                <p className={styles.date}>{props.item.date}</p>
            </div>
        </div>
    );
};

export default BlockReview;