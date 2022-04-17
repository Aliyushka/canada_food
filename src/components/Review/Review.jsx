import React from 'react';
import styles from "./Review.module.css"
import BlockReview from "./BlockReview";
import {comments} from "../../constant";

const Review = () => {
    return (
        <div className="review">
            <h2 className={styles.userReview}>Отзывы</h2>
            <div className={styles.userComments}>
                {
                    comments.map((item, index) => {
                        return (
                            <BlockReview
                                item={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Review;