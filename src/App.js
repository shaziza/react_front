import './styles/index.css';
import React, {Component} from 'react';
import {Routes} from './Routes.js'; 
import Menu from './components/Menu'

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
        <section className="container">
          <div className="left-column">
            <Menu/>
          </div>
          <div className="right-column">
            <Routes />
          </div>
        </section>
      </div>
    );
  }
}

export default App;