import classes from './AboutUsPhoto.module.css';
import React, { Component } from 'react';

class AboutUsPhoto extends Component {

    render() {
        const {image} = this.props;
        return (
            <div className = {classes.PhotoDiv}>
                <img src={image} alt="photoAboutUs" className={classes.Photo} />
            </div>
        )
    }
}

export default AboutUsPhoto;