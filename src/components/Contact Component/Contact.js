import React from "react";
import Styles from "./Contact.module.css";

const Contact = () => {
  let ContactContent = (
    <>
      <div>
        <h1>CONTACT</h1>
        <br />
      </div>
      <div className={Styles.flexContainer}>
        <div>
          <h1 style={{color: "#dcb548"}}>Post Address </h1>
          <div>
            <h4>Henrik Lestreus AB</h4>
            <h4>Östra Förstadsgatan</h4>
            <h4>5 B</h4>
            <h4>211 31 Malmö</h4>
            <h4>Sweden</h4>
          </div>
        </div>
        <div>
          <h1 style={{color: "#dcb548"}}> Email </h1>
          <h4>
            <a href="mailto:info@svenskparfym.se" className={Styles.link}>
              info@svenskparfym.se
            </a>
          </h4>
        </div>
        <br />
        <div>
          <h1 style={{color: "#dcb548"}}> Phone </h1>
          <h4>
            <a href="tel:+46(0)709 98 88 19" className={Styles.link}>
              +46(0)709 98 88 19
            </a>
          </h4>
        </div>
      </div>
    </>
  );

  return <div className={Styles.MainDiv}>{ContactContent}</div>;
};

export default Contact;
