import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Select({ dataList, id, label }) {
  return (
    <div className="select-container">
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        {dataList.map((element) => (
          <option key={element} value={element.toLowerCase()}>{element}</option>))}
      </select>
    </div>
  );
}

export default Select;

Select.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
