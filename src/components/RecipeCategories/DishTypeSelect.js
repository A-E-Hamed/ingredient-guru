import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import classes from './MealTypeSelect.module.css';



const DishTypeSelect = ({dishType , setDishType}) => {
  const [dishTypes, setDishTypes] = useState([]);

  const endpoint = "https://api.edamam.com/doc/open-api/recipe-search-v2.json";
  useEffect(() => {
    const fetchDishTypes = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data.paths && data.paths["/api/recipes/v2"]) {
          const dishTypeParameter = data.paths[
            "/api/recipes/v2"
          ].get.parameters.find((param) => param.name === "dishType");
          const enumArray = dishTypeParameter.items.enum;
          setDishTypes(enumArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishTypes();
  }, [endpoint]);

  return (
    <Form.Select
      value={dishType}
      onChange={(e) => setDishType(e.target.value)}
      className={`${classes["form-select"]} ${classes["custom-dropdown"]}`}      
    >
      <option value="">Select Dish Type</option>
      {dishTypes.map((dish) => (
        <option key={dish} value={dish}>
          {dish}
        </option>
      ))}
    </Form.Select>
  );
};

export default DishTypeSelect;
