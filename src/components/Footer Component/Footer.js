import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="CopyRight">
        <p>Copyright © 2020</p>
      </div>
      <ul style={{listStyle:"none"}}>
        <li>POLICY</li>
        <li>CONTACT</li>
        <li>INSTAGRAM</li>
      </ul>
    </div>
  );
};

export default Footer;
