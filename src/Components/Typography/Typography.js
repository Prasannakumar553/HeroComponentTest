import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css'; 


 
const Typography = ({ variant, children }) => {
  const variantClass = `typography-${variant}`; 
 
  return <span className={`typography ${variantClass}`}>{children}</span>;
};
 
Typography.propTypes = {
  variant: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body']),
  children: PropTypes.node.isRequired,
};
 
Typography.defaultProps = {
  variant: 'body',
};


 
export default Typography;


