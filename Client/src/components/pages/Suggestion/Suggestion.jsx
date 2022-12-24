import React from "react";
import styles from "./suggestion.module.css";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import SuggAndAppForm from "../../../components/SuggAndAppForm/SuggAndAppForm";

export default function Suggestion() {
  return (
    <>
        <NavBar />
      <div className={`${styles.maincontainer}`}>
        <div className={styles.maintext}>
        <h1 className={`${styles.pagetitle} text-success`}>SUGGESTION</h1>
        <h3 className="text-center text-light">Your Suggestion Matters</h3>
        </div>
      </div>
      <div className={`my-5 ${styles.openingscontainer}`}>
        <SuggAndAppForm show={false} />
      </div>
      <Footer />
    </>
  );
}
