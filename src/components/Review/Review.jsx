import React, {useEffect, useState} from 'react';
import styles from './Review.module.css'
import {BASE_URL} from "../../constant";
import img from '../../media/Group 32.svg'
import pen from '../../media/ручка.svg'



const Review = () => {

    const [comments, setComments] = useState([]);

    const getData = () => {
        const url = BASE_URL + "comments";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setComments(data));
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="review">
                <h2 className={styles.userReview}>Отзывы</h2>
            </div>
            <div className={styles.userComments}>
                {
                    comments.map((item, index) => {
                        return (
                            <div className={styles.parent}>
                                <img src={img}/>
                                <div className={styles.group}>
                                    <img className={styles.vector} src={item.image}/>
                                    <div className={styles.pen}>
                                        <p className={styles.userName}>{item.user}</p>
                                        <img src={pen}/>
                                    </div>
                                    <p className={styles.text}>{item.comment}</p>
                                    <p className={styles.date}>{item.date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>

    );
};

export default Review;