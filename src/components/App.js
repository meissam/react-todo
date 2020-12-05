import React, { Component } from "react";

import Layout from "../Layout/Layout";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

import "../assets/css/styles.css";


class App extends Component {
  state = {
    error: null,
  };



  render() {

    return (
      <>
        <Layout
          header={<Header />}
          content={<Content />}
          sidebar={<Sidebar />}
         
        />
      </>
    );
  }
}

export default App;
