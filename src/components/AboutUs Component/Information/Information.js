import classes from '../Information.module.css';
import React from 'react';

import photo1 from '../../../shared/Images/picture1.jpg';
import photo2 from '../../../shared/Images/picture2.jpg';
import photo4 from '../../../shared/Images/picture4.jpg';

import {text, text2, text3, text4, text5} from '../../../shared/AboutUs.json';

const Information = () => {

    return (
      <div className={classes.Information}>

        <img src={photo1} className={classes.HeaderPhoto} alt="headerphoto" />

        <div className={classes.Title}>About us</div>

        <div className={classes.MainInformation}>
          <div className={classes.TopText}>CONCEPT OF SVENSK PARFYM
          <p>{text}</p>
          </div>  
        </div>

        <diV className={classes.MainInformation}>
          <div className={classes.TopText}>INVENTION
          <p>{text2}</p>
          </div>
        </diV>

        <img src={photo2} className={classes.Photo2} alt="Photo2" />

        <diV className={classes.MainInformation}>
          <div className={classes.TopText}>NICHE PERFUMERY
          <p>{text3}</p>
          </div>
        </diV>
          
        <diV className={classes.MainInformation}>
          <div className={classes.TopText}>FRAGRANCE IS GENDER-FREE
          <p>{text4}</p>
          </div>
        </diV>

        <diV className={classes.MainInformation}>
          <div className={classes.TopText}>INVENTION
          <p>{text5}</p>
        </div>

        <img src={photo4} className={classes.Photo4} alt="Photo4" />
          
        </diV>
      </div>
    )
  }

export default Information;