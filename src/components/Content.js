import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';

const Content = ({products, ...props}) => {
  return (
    <div className="m-4">
      {products.map((product, key) =>
        <List
          key={key}
          product={product}
          deleteButton={key !== 0}
          index={key}
          products={products}
          {...props}
        />,
      )}
    </div>
  );
};

Content.propTypes = {products: PropTypes.array};

export default React.memo(Content);
