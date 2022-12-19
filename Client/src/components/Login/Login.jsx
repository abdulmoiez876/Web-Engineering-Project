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
        <form className="mt-4">
          <div class="form-outline mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class={`btn btn-outline-success btn-block ${styles.btn}`}
          >
            Login
          </button>

          <p className="small text-center mt-3">
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
          <div class="text-center mt-2 d-flex justify-content-center">
            <p className="text-secondary m-0">Not Registered?</p>
            <a className={`mx-1 ${styles.signuplink}`} href="#">
              Sign up
            </a>
          </div>
        </form>
      </section>
      <div>
        <img src={loginPic} alt="loginPic" className={styles.loginbgpic} />
      </div>
    </>
  );
}
