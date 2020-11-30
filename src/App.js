import './styles/App.css';
import React, { Component } from 'react';
import { Routes } from './Routes.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="Content">
        <Routes />
    </div>
    );
  }
}
export default App;