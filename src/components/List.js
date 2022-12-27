import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/* eslint-disable max-len */
const generateContent = ({product, setProducts, index}) => {
  const CONTENT = [];

  for (const [KEY, VALUE] of Object.entries(product)) {
    CONTENT.push(
        <div className="basis-1/5" key={KEY}>
          <div className="mb-6 mr-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">{KEY}</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={KEY === 'Total' ? +product.Qty * +product['Product Price'] : VALUE}
              onChange={(e) => {
                setProducts((products) => {
                  products[index] = {
                    ...product,
                    [KEY]: e.target.value,
                  };
                  return [...products];
                });
              }}
              disabled={KEY === 'Total'}
            />
          </div>
        </div>,
    );
  }

  return CONTENT;
};

const List = ({deleteButton = false, setProducts, index, products, ...props}) => (
  <div className="flex flex-row">
    {generateContent({
      setProducts,
      index,
      ...props,
    })}
    <div className="basis-1/5 mt-6">
      {deleteButton && <Button title="Delete" type="danger" onClick={() => {
        products.splice(index, 1);
        setProducts([...products]);
      }} />}
    </div>
  </div>
);

List.propTypes = {
  deleteButton: PropTypes.bool,
  setProducts: PropTypes.func,
  index: PropTypes.number,
  products: PropTypes.array,
};

export default React.memo(List);
