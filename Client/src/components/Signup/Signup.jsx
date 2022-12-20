import React from "react";
import styles from "./signup.module.css";
import loginPic from "../../assets/loginpage.jpg";
import logo from "../../assets/logo.png";

export default function Signup() {
  return (
    <>
      <section
        className={`card px-4 py-4 px-md-5 text-center text-lg-start ${styles.signupform}`}
      >
        <div className="row">
          <img src={logo} alt="Logo" className={styles.signuplogo} />
        </div>
        <div className={`row ${styles.Signin}`}>
          <h3>Sign up</h3>
        </div>
        <form>
                <div class="row">
                  <div class="col-md-6 my-4">
                    <div class="form-outline">
                      <input type="text" class="form-control" placeholder="First name"/>
                    </div>
                  </div>
                  <div class="col-md-6 my-4">
                    <div class="form-outline">
                      <input type="text" class="form-control" placeholder="Last name"/>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" class="form-control" placeholder="Email Address"/>
                  
                </div>

                <div class="form-outline mb-4">
                  <input type="password"class="form-control" placeholder="Password"/>
                </div>
                <div class="form-outline mb-4">
                  <input type="password"class="form-control" placeholder="Confirm Password"/>
                </div>

                <button type="submit" class={`btn btn-outline-success btn-block ${styles.btn}`}>
                  Sign up
                </button>
                <div class="text-center mt-4">
                  <p className="text-success">or sign up with:</p>
                  <button type="button" class={`btn btn-link btn-floating mx-1 ${styles.signupicon}`}>
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class={`btn btn-link btn-floating mx-1 ${styles.signupicon}`}>
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class={`btn btn-link btn-floating mx-1 ${styles.signupicon}`}>
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class={`btn btn-link btn-floating mx-1 ${styles.signupicon}`}>
                    <i class="fab fa-github"></i>
                  </button>
                </div>
                <div class="text-center mt-2 d-flex justify-content-center">
                  <p className="text-secondary m-0">Already Registered?</p><a className={`mx-1 ${styles.loginlink}`} href="#">Login</a>
                </div>
              </form>
      </section>
                  
      <div>
        {/* <img src={loginPic} alt="loginPic" className={styles.signupbgpic} /> */}
      </div>
    </>
  );
}
