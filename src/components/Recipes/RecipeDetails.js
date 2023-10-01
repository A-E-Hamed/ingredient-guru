import styles from "./RecipeDetails.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from 'react-router-dom';



const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state.recipe;

  if (!recipe) {
    return <p>Loading...</p>;
  }

  const {
    label,
    image,
    ingredients,
    dietLabels,
    mealType,
    dishType,
    url,
    cuisineType,
  } = recipe;

  

  return (
    <div className={styles.container}>
    <Link to="/" className={styles.navLink}>Ingredient Guru</Link>
      <div className={styles.content}>
        <h1 className={styles.title}>{label}</h1>
        <div className={styles.topSection}>
          <div className={styles.imgContainer}>
            <img
              className={styles.image}
              src={image}
              alt={label}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
          <div className={styles.summary}>
            <div className={styles.details}>
              <h4>Area: </h4>
              <p> {cuisineType}</p>
            </div>
            <h4>Dite Lables: </h4>
            <ul>
              {Array.isArray(dietLabels) &&
                dietLabels.map((dietLabel, index) => (
                  <li key={index}>{dietLabel}</li>
                ))}
            </ul>
            <div className={styles.details}>
              <h4>Meal Type: </h4>
              <p> {mealType}</p>
            </div>
            <div className={styles.details}>
              <h4>Category: </h4>
              <p>{dishType}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div>
            <h3>Ingredients:</h3>
            <ul className={styles.list}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
          <Button>
            <a href={url}>Get The instructions </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
