import React, { Fragment } from 'react';
import './styles.scss';

export const Input = ({ type = 'text', value, onChange, label }) => {
  const handleChangeValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <Fragment>
      <input
        className="form-input"
        type={type}
        onChange={handleChangeValue}
        value={value}
      />
      {
        <label className={`${value ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      }
    </Fragment>
  );
};
