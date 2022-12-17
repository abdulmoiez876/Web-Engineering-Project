import React from "react";
import styles from "./login.module.css";
import loginPic from "../../assets/loginpage.jpg";
import logo from "../../assets/logo.png";

export default function Login() {
  return (
    <>
      <section
        className={`card px-4 py-4 px-md-5 text-center text-lg-start ${styles.loginform}`}
      >
        <div className="row">
          <img src={logo} alt="Logo" className={styles.loginlogo} />
        </div>
        <div className={`row ${styles.Signin}`}>
          <h2>Sign in</h2>
        </div>
        <div className={`row`}>
          <input
            type="text"
            placeholder="Enter Your Email"
            className={`form-control mt-4`}
          />
        </div>
        <div className={`row`}>
          <input
            type="text"
            placeholder="Enter Your Password"
            className={`form-control my-4`}
          />
        </div>
        <div class="form-check d-flex justify-content-start mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="loginpassremember"
          />
          <label className="form-check-label mx-2" htmlFor="loginpassremember">
            {" "}
            Remember password{" "}
          </label>
        </div>
        <button type="submit" class="btn btn-success btn-block mb-4">
          Login
        </button>
        <p className="small text-center">
          <a className={`text-secondary ${styles.fpass}`} href="#!">
            Forgot password?
          </a>
        </p>
        <hr></hr>
        <div className="text-center">
          <p className="text-success">or sign up with:</p>
          <button
            type="button"
            className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
          >
            <i className="fab fa-facebook-f"></i>
          </button>

          <button
            type="button"
            className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
          >
            <i className="fab fa-google"></i>
          </button>

          <button
            type="button"
            className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
          >
            <i className="fab fa-twitter"></i>
          </button>

          <button
            type="button"
            className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
          >
            <i className="fab fa-github"></i>
          </button>
        </div>
      </section>
      <div>
        <img src={loginPic} alt="loginPic" className={styles.loginbgpic} />
      </div>
    </>
  );
}
