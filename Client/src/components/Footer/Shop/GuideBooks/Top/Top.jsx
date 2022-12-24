import React from 'react'
import styles from "./top.module.css"
import Navbar from '../../../../Navbar/Navbar'

export default function Top(props) {
  return (
    <>
       
        <div className={styles.container}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <div className={styles.topFlex}>
                <div className={styles.topImageContainer}>
                    <img src={props.topImage1} className={styles.topImage}></img></div>
                <div className={styles.topCaptionHeading}>
                    <div className={styles.captionContainer}>
                    <h1 className={styles.captionHeading}>{props.captionHeading}</h1>
                    <h3 className={styles.captionDescription}>{props.captionDescription}</h3>
                    <button className={`btn btn-primary ${styles.captionButton}`}>Take Me There</button>
                    </div>
                </div>
            </div>
            <div className={styles.continentsContainer}>
                <h3 className={styles.continentHeading}>
                    {props.continentHeading}
                </h3>
                <div className={styles.continentFlex}>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[0]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[0]["name"]}</h5>
                        
                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[1]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[1]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[2]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[2]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[3]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[3]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[4]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[4]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[5]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[5]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[6]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[6]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[7]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[7]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[8]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[8]["name"]}</h5>

                    </div>
                    <div className={styles.continentImageContainer}>
                        <img className={styles.continentImage} src={props.continentsImages[9]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[9]["name"]}</h5>

                    </div>
                    
              </div>
            </div>
        </div>
    </>
  )
}
