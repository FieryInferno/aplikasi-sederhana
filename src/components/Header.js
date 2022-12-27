import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const Header = ({setProducts}) => (
  <div className="m-4">
    <Button title="New" type="primary" onClick={() => setProducts((products) => {
      return [
        ...products,
        {
          'Product Name': '',
          'Product Price': '',
          'Qty': '1',
          'Total': '',
        },
      ];
    })} />
  </div>
);

Header.propTypes = {setProducts: PropTypes.func};

export default React.memo(Header);
