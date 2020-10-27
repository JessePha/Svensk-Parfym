import React from "react";
import { HiX } from "react-icons/hi";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./PurchaseConfirmed.module.css";

const PurchaseConfirmed = (props) => {
  let closeMessage = () => {
    props.setConfirmation(false);
  };

  return (
    <div>
      <Backdrop open={props.confirmation} closed={closeMessage} />
      <div
        style={props.confirmation ? { display: "block" } : { display: "none" }}
        className={classes.PurchaseConfirmed}
      >
        <HiX className={classes.Close} onClick={closeMessage}></HiX>
        <div className={classes.Message}>
          <p>Purchase Confirmed!</p>
          <p>You will get a confirmation through your email shortly</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseConfirmed;
