import React from "react";
import { HEADING_VARIANT } from "./heading.constants";

const Heading = ({ text, variant, className }) => {
  const HeadingTag = HEADING_VARIANT[variant] || "h1";
  return <HeadingTag className={className}>{text}</HeadingTag>;
};

export default Heading;
