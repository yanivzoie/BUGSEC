import React from 'react';
import { Input } from '../layout/Input';
import './styles.scss';

const FiltersForm = ({ value, onChange, select_value }) => {
  return (
    <div className="filter-form">
      <div>
        <Input
          className="form-input"
          type="text"
          name="search"
          value={value}
          onChange={onChange}
          label="Search User"
        />

        <select onChange={select_value}>
          <option value="" disabled default>
            Sort by
          </option>
          <option value="asc">Name - A-Z</option>
          <option value="desc">Name - Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersForm;
