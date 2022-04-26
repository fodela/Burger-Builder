import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import classes from "./CheckOutSummary.css";

const checkOutSummary = (props) => (
  <div className={classes.CheckOutSummary}>
    <h1>We hope it tastes well!</h1>
    <div style={{ width: "100%", margin: "auto" }}>
      <Burger ingredients={props.ingredients} />
    </div>
    <Button btnType="Danger" clicked>
      CANCEL
    </Button>
    <Button btnType="Success" clicked>
      Continue
    </Button>
  </div>
);
export default checkOutSummary;
