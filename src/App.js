import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const PRODUCTS_LOCAL = JSON.parse(localStorage.getItem('products'));

const App = () => {
  const [PRODUCTS, setProducts] = useState(PRODUCTS_LOCAL || [
    {
      'Product Name': '',
      'Product Price': '',
      'Qty': '1',
      'Total': '',
    },
  ]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(PRODUCTS));
  }, [PRODUCTS]);

  return (
    <>
      <Header setProducts={setProducts} />
      <Content products={PRODUCTS} setProducts={setProducts} />
      <Footer products={PRODUCTS}/>
    </>
  );
};

export default App;
