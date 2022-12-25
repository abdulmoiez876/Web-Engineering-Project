import React from 'react'
import { shashkaData } from './ShashkaData'
import styles from './Shashka.module.css'

export default function Shashka() {
  return (
    <div className={styles.container}>
        <div className={`${styles.shashka1}`}>
            <div className={`p-4 ${styles.shashka1Description}`}>
                <h1>{shashkaData[0].heading}</h1>
                <p>{shashkaData[0].description}</p>
                </div>
            <img className={styles.shashka2Image} src={shashkaData[0].image}></img>
        </div>
        <div className={`mt-4 ${styles.shashka2}`}>            
            <img className={styles.shashka2Image} src={shashkaData[1].image}></img>
            <div className={`p-4 ${styles.shashka2Description}`}>
                <h1>{shashkaData[1].heading}</h1>
                <p>
                {shashkaData[1].description}
                </p>
                </div>
        </div>
    </div>
  )
}
