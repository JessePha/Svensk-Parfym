import React from "react";
import { connect } from "react-redux";
import classes from './HomeView.module.css'

let HomeView = () => {



  return (
    <div className = {classes.HomeView}>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.items,
  };
};

export default connect(mapStateToProps, null)(HomeView);
