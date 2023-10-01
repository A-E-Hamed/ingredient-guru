import React from "react";
import Form from "react-bootstrap/Form";
import classes from './MealTypeSelect.module.css';

const MealTypeSelect = ({ mealType, setMealType }) => {
  return (
    <Form.Select
      value={mealType}
      onChange={(e) => setMealType(e.target.value)}
      className={classes["form-select"]}
    >
      <option value="">Select Meal Type</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
      <option value="Teatime">Teatime</option>
    </Form.Select>
  );
};

export default MealTypeSelect;