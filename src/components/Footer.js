import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const Footer = ({products}) => {
  const GRAND_TOTAL = useMemo(() => {
    return products.reduce((total, product) => total + (+product.Qty * +product['Product Price']), 0);
  }, [products]);

  return (
    <div className="flex flex-row m-4">
      <div className="basis-3/5"></div>
      <div className="basis-1/5">
        <div className="mr-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Grand Total</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={GRAND_TOTAL}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {products: PropTypes.array};

export default React.memo(Footer);
