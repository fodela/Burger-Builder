import { React, Component } from "react";

import Button from "../../../components/UI/Button/Button";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <div>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="Your Name" placeholder="name" />
          <input type="email" name="email" placeholder="Your Mail" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
        </form>
        <Button btnType="Success">ORDER</Button>
      </div>
    );
  }
}
export default ContactData;
