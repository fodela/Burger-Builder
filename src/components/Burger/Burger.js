import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

const burger = (props) => {
  // get all ingredient name in state as an array
  // transform each ingredient into an array with length of how much of that ingredient we have
  const transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
    return [...Array(props.ingredients[igkey])].map((_, i) => {
      return <BurgerIngredient key={igkey + 1} type={igkey} />;
    });
  });
  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
