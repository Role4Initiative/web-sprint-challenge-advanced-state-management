import React, { Component, useState } from "react";
import { connect } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
  console.log(props)
  const [search, setsearch] = useState("");

  const handleChange = (evt) => {
    setsearch(evt.target.value)
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    props.fetchSmurfs(search);
  };

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

export default connect(fetchSmurfs)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.