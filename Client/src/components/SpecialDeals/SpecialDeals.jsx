import { React } from 'react';
import styles from './specialdeals.module.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Card from './Card/Card';

export default function SpecialDeals() {
    return <div>
        <Navbar />
        <div className={`${styles.gap}`}></div>

        <div className={`${styles['content-container']}`}>
            <div className={`${styles['header-container']}`}>
                <h1 className={`${styles['main-heading']}`}>Travel Deals and Recommendations</h1>
                <p className={`${styles['main-para']}`}>Deals and recommendations to inspire your next trip</p>
            </div>
            <Card />
            <div className={`${styles['small-cards-container']}`}>
                
            </div>
        </div>
    </div>
}