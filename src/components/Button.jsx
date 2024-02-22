

import React from 'react';
import s from "../Style.module.css"
const Button = ({ onClick, children }) => {
  return (
    <div className={s.buttonCentr}> <button type="button" className={s.button} onClick={onClick}>
      {children}load more
    </button></div>
  );
};

export default Button;

