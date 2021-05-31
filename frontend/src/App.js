import React from 'react'
import {Route} from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import About from './components/About';
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorLogin';
import DoctorRegistration from './components/DoctorRegisteration';
import PatientRegistration from './components/PatientRegistration';
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/" >
        <Home/>
      </Route >
      <Route path="/about" >
        <About/>
      </Route>
      <Route path="/patientlogin">
        <PatientLogin/>
      </Route>
      <Route path="/doctorlogin">
        <DoctorLogin/>
      </Route>
      <Route path="/doctorregistration">
        <DoctorRegistration/>
      </Route>
      <Route path="/patientregistration">
        <PatientRegistration/>
      </Route>
    </>
  )
}
export default App