import React from "react";
import styles from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.ProductsCard}>
        <div className={styles.imgContainer}>
          <img className={styles.ProductsImg} src={props.img} alt={props.alt} />
        </div>
        <div className={styles.ProductsInfo}>
          <h4>{props.name}</h4>
          <button className={styles.ProductsButton}>
            <a href={props.url}>View Recipe</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
