import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Select({
  dataList, id, label, name, value, handleChange,
}) {
  return (
    <div className="select-container">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} value={value} onChange={handleChange}>
        {dataList.map((element) => (
          <option key={element} value={element}>{element}</option>))}
      </select>
    </div>
  );
}

export default Select;

Select.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
