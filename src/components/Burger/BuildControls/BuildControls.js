import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

// import classes from "./BuildControls.css";

// create controls, an arrays of dictionaries of label and type of the various ingredients

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default buildControls;