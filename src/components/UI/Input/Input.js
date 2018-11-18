import React from 'react';

const Input = () => {
  let inputElement = null;

  switch (props.inputType) {
    case 'input':
      inputElement = <input />;
  }
  return (
    <div>
      <label>{props.label}</label>
    </div>
  );
};

export default Input;
