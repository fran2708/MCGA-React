import React from 'react';
import Link from '../../components/Link';
import styles from './products.module.css';

const Products = () => {
  return (
    <div className={styles.container}>
      <div>Products</div>
      <Link text={'Regresar'} to={'/'}  />
    </div>
  );
};

export default Products;