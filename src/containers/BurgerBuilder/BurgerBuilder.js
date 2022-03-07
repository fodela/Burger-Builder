import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

// set prices
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  meat: 1.3,
  cheese: 0.4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    // set old ingredient count updated count and updatedIngredients variables
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    // update Ingredients state
    const updatedIngredients = { ...this.state.ingredients };

    // update ingredient type
    updatedIngredients[type] = updatedCount;
    // update the price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    // update the state
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    // set count and updated the count
    const oldCount = this.state.ingredients[type];
    // handle negative ingredient error
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    // update the ingredient state
    const updatedIngredients = { ...this.state.ingredients };
    // update type
    updatedIngredients[type] = updatedCount;
    // update the price
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    // update state
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  render() {
    // get info of ingredients whose less button should be disabled in the form {salad:true,meat:false,...} This will enable us use the built in html property disable
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
