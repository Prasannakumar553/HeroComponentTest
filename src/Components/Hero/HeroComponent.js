import React from 'react';
import classes from './HeroComponent.module.css';
import Emage from '../assets/Image.jpg';

 
const Hero = ({ title, description, image }) => {
  return (
    <div className={classes.hero}>
      <div className="hero-content">
        <h1 className={classes.hero-title}>{title}</h1>
        {/* <Typography variant="h1" title={title} />
        <Typography variant="h2" title={description} /> */}
        <h2 className={classes.hero-description}>{description}</h2>
      </div>
      <div className={classes["hero-image"]}>
      <img  src={Emage} alt="Hero" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
    
  );
}
 
export default Hero;