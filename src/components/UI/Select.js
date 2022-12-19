import React from "react";

import classes from "./Select.module.scss";

const Select = React.forwardRef((props, ref) => {
  const options = props.input.sizes;

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <select ref={ref}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
});

export default Select;
