import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/" element={<BurgerBuilder />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
