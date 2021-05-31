import React from 'react'
import signpic from "../images/signup.png";
import { NavLink } from "react-router-dom";

const PatientRegistration = () => {
    return (
        <>
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-email"></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off"
                                    placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                    placeholder="Your Phone"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icons-doctor"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    placeholder="Your Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                <i class="zmdi zmdi-lock material-icons-doctor"></i>
                                </label>
                                <input type="cpassword" name="cpassword" id="cpassword" autoComplete="off"
                                    placeholder="Confirm Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="doctor">
                                <i class="zmdi zmdi-walk material-icons-doctor"></i>
                                </label>
                                <input type="number" doctor="doctor" id="doctor" autoComplete="off"
                                    placeholder="Your Doctor"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit"
                                    value="register"/>
                            </div>
                        </form>
                        <div className="signup-image">
                                <figure>
                                <img src={signpic} alt="registration pic"/>
                                </figure>
                        
                            <NavLink to="/patientlogin" className="signup-image-link">
                                I am already register
                            </NavLink>
                        </div>
                        </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default PatientRegistration