import React from 'react';
import PropTypes from 'prop-types';

const COLOR = {
  primary: 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
  danger: 'bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
};

/* eslint-disable max-len */
const Button = ({title, type, ...props}) => (
  <button type="button" className={`text-white ${COLOR[type]} font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`} {...props}>{title}</button>
);

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default React.memo(Button);
