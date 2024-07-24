import React from 'react'
import Pizza from './img/pizza.jpg'
import styles from './Business.module.css'

export default function Business() {
    return(
        <>
        <div className={styles.businessCard}>
            <div className={styles.imgWrapper}>
                <img src={Pizza} alt='pizza' className={styles.imgWrapper} />
            </div>
            <h2 className={styles.businessName}>DOMino Pizzeria</h2>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <p>4269 JavaScript Blvd<br/> Pytown<br/> Tx 12345</p>
                </div> 
                <div className={styles.businessDescription}>
                    <h3>Italian</h3>
                    <h5>4.5 stars</h5>
                    <p>90 reviews</p>
                </div>
            </div>
        </div>
            
        </>
    )
}