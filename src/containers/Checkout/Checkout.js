import React, { Component } from "react";
import CheckOutSummary from "../../components/CheckOutSummary/CheckOutSummary";
import withRouter from "../../hoc/withRouter/withRouter";
class CheckOut extends Component {
  state = {
    ingredients: {
      meat: 1,
      salad: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  checkoutCancelledHandler = () => {
    this.props.router.navigate(-1);
  };

  checkoutContinuedHandler = () => {
    this.props.router.navigate("/checkout/contact-data", "replace");
  };
  render() {
    return (
      <div>
        <CheckOutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default withRouter(CheckOut);
