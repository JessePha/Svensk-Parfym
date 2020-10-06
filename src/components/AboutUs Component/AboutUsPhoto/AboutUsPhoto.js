import classes from '../Information.module.css';
import React, { Component } from 'react';

class AboutUsPhoto extends Component {

    render() {
        const {image} = this.props;
        return (
            <div>
                <img src={image} alt="photoAboutUs" className={classes.Photo} />
            </div>
        )
    }
}

export default AboutUsPhoto;