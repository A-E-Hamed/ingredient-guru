import React, { useEffect, useState } from 'react';
import Products from './Products';
import classes from './RandomDessert.module.css';

const RandomDessert = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          'https://api.edamam.com/search?q=sugar,milk,flour&Type=&Type=desserts&app_id=1e48b986&app_key=7ee169c52663dc0358cc35139c0d3ef2'
        );
        const data = await response.json();

        // Get 3 random recipes from the response
        const randomRecipes = getRandomElements(data.hits, 3);

        setRecipes(randomRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  // Helper function to get random elements from an array
  const getRandomElements = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const data = recipes.map((recipe) => (
    <Products
      key={recipe.id}
      img={recipe.recipe.image}
      alt={recipe.recipe.label}
      name={recipe.recipe.label}
      url={recipe.recipe.url}
    />
  ));
  console.log(recipes);

  return (
    <div className={classes.container}>
      {data}
    </div>
  );
};

export default RandomDessert;