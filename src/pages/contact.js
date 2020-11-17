import React from "react";
import Header from "../components/header";
import Styles from "../styles/main.module.css"
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div >
      <Header headerText="Contact Me" 
      paragraph="I'm a content strategist for Waymo (formerly the 
      Google self-driving car project)"/>
      <div className={Styles.mainColumn + " wrapper"} >
        <p>I'm a content strategist for Waymo (formerly the Google self-driving car project) </p>
        <p>I'm passionate about writing simple content that makes life easier for the people reading it </p>
      </div>
      <Footer />
    </div>
  );
}
