import React from "react";
import classes from "./HeroComponent.module.css";
import Emage from "../../assets/Image.jpg";
import Heading from "../Heading/Heading";

const Hero = ({
  title,
  description,
  image,
  bgColor,
  headingProps,
  subHeadingProps,
}) => {
  const { text: headingText, variant: headingVariant } = headingProps;
  const { text: subHeadingText, variant: subHeadingVariant } = subHeadingProps;
  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${image})`, backgroundColor: bgColor }}
    >
      <div className="hero-content">
        <div>
          <Heading text={headingText} variant={headingVariant} />
          <Heading text={subHeadingText} variant={subHeadingVariant} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
