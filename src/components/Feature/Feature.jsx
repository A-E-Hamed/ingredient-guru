import React from 'react';
import styles from './Feature.module.css';

const Feature = () => {
  return (
    <div className={styles.FeatureContainer}>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
    </div>
  );
}

export default Feature;