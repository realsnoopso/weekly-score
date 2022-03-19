import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";

import home from "./home";
import edit from "./edit";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Route path="/" exact component={home} />
        <Route path="/edit" component={edit} />
      </div>
    );
  }
}

export default App;