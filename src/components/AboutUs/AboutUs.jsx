import React from 'react';
import styles from "./AboutUs.module.css";
import {aboutUs} from "../../constant";

const AboutUs = () => {
    return (
        <>
            <div>
                <h1 className={styles.us}>Почему выбирают нас:</h1>
            </div>
            <div className={styles.one}>
                {
                    aboutUs.map((item, index) => {
                        return (
                            <div className={styles.all} key={index}>
                                <div className={styles.about}>
                                    <img className={styles.rectangle} src={item.image}/>
                                    <h2 className={styles.fast}>{item.title}</h2>
                                    <p className={styles.aboutUs}>{item.subtitle}</p>
                                </div>
                            </div>

                        )

                    })
                }
            </div>
        </>
    )
        ;
};

export default AboutUs;