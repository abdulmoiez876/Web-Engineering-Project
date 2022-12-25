import React from 'react'
import PropTypes from 'prop-types'
import { booksData } from './BooksData'
import styles from './books.module.css'
import Navbar from '../../../../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../../../Footer'
// import { categoryBackground } from './BooksData'

function Books(props) {
    const params = useParams();
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
        <div  className={`${styles.categoryContainer}`} ><h5 className={`${styles.booksCategory}`}>{params.name}</h5></div>
        <div className={styles.booksContainer}>
            {booksData.map((element, index)=>{
                return <div className={styles.grid}>
                   
                        <img className={styles.bookImage} src={element["image"]}></img>
                      
                        <p className={styles.bookName}>{element["name"]}</p>
                
                </div>
            })}
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

Books.propTypes = {

}

export default Books

