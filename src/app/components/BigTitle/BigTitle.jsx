import React from 'react';
import './BigTitle.css';

const BigTitle = ({children, fontSize}) => {
  return (
    <h1 
        className="big-title" 
        style={{ fontSize: fontSize }} 
        data-text={children}
    >
        {children}
    </h1>
  );
};

export default BigTitle;
