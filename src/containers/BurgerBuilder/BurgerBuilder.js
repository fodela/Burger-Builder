import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 1,
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
