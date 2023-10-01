import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./RecipeSearch.module.css";
import MealTypeSelect from "../RecipeCategories/MealTypeSelect";

import DishTypeSelect from "../RecipeCategories/DishTypeSelect";

const RecipeSearch = () => {
  const [ingredients, setIngredients] = useState([]);
  const [mealType, setMealType] = useState("");
  const [dishType, setDishType] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [ingredientValid, setIngredientValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      const appId = "1e48b986";
      const appKey = "7ee169c52663dc0358cc35139c0d3ef2";
      const ingredientsList = ingredients.join(",");
      console.log(appId);
      console.log(appKey);

      const mealTypeParam = mealType ? `&mealType=${mealType}` : "";
      const dishTypeParam = dishType ? `&dishType=${dishType}` : "";
      const endpoint = `https://api.edamam.com/search?q=${ingredientsList}&Type=${mealTypeParam}&Type=${dishTypeParam}&app_id=${appId}&app_key=${appKey}`;
      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data.hits && data.hits.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const matchedRecipe = data.hits[randomIndex].recipe;
          setRecipe(matchedRecipe);
        } else {
          setRecipe(null);

          console.log("No recipe found with the given ingredients");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (ingredients.length > 0) {
      fetchRecipe();
    }
  }, [ingredients, mealType, dishType]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const isValidInput = inputValue.trim();
    if (isValidInput && !ingredients.includes(inputValue)) {
      setSearchItems([...searchItems, inputValue]);
      setInputValue("");
      setAddButtonClicked(false);
      setIngredients([...searchItems, inputValue]);
    } else {
      setAddButtonClicked(true);
      setIsValid(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddItem(e);
    }
  };

  const handleSearch = () => {
    if (mealType && dishType && recipe) {
      navigate("/recipe-details", { state: { recipe: recipe } });
    } else {
      setIngredientValid(true);
      setSearchButtonClicked(true);
    }
  };
  

  console.log(recipe);

  const handleRemoveItem = (index) => {
    const updatedItems = searchItems.filter((_, i) => i !== index);
    setSearchButtonClicked(false);
    setAddButtonClicked(false);
    setSearchItems(updatedItems);
    setIngredients(updatedItems);
  };

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.navLink}>
        Ingredient Guru
      </Link>
      <div className={classes.heading}>
        <h2>Get A Random Recipe With Your Available Ingredients</h2>
      </div>
      <Form className={classes.form}>
        <Row>
          <Col>
            <Form.Control
              className={`${classes["form-control"]} me-2`}
              type="text"
              placeholder="Enter your ingredients"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs="auto">
            <Button variant="primary" onClick={handleAddItem}>
              Add
            </Button>
          </Col>
        </Row>
        <div>
          {searchItems.map((item, index) => (
            <Badge
              key={index}
              pill
              variant="primary"
              className={`${classes.badge} mr-2`}
              onClick={() => handleRemoveItem(index)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </Badge>
          ))}

          {addButtonClicked &&
            isValid(
              <span className={classes.error}>
                Please enter a valid ingredient.
              </span>
            )}
        </div>
        <Row>
          <MealTypeSelect mealType={mealType} setMealType={setMealType} />
          <DishTypeSelect dishType={dishType} setDishType={setDishType} />
        </Row>
        {searchButtonClicked &&
          (searchItems.length === 0 || mealType === "" || dishType === "") && (
            <div className={classes.error}>
              Please enter some ingredients & select a meal type & dish type
              before searching.
            </div>
          )}
        {searchButtonClicked && ingredientValid && (
          <div className={classes.error}>
            Please enter some valid ingredients & select a meal type & dish type
            before searching.
          </div>
        )}
        <Button onClick={handleSearch}>Search</Button>
      </Form>
    </div>
  );
};

export default RecipeSearch;
