import React from 'react';
import signpic from "../images/signup.png";
import { NavLink } from "react-router-dom";

const PatientLogin = () => {
    return (
        <>
        <section className="sign-in">
            <div className="container mt-5">
                <div className="signin-content">

                    <div className="signin-image">
                                <figure>
                                <img src={signpic} alt="login pic"/>
                                </figure>
                        
                            <NavLink to="/patientregistration" className="signup-image-link">
                                Create an Account
                            </NavLink>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-email"></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off"
                                    placeholder="Your Email"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icons-doctor"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    placeholder="Your Password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit"
                                    value="Log In"/>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default PatientLogin
