import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';

import Login from './components/Login'
import Registro from './components/Registro'


class App extends Component {

  state = {
    regis:false
  }

  
  registro = (e) => {
    e.preventDefault();
    this.setState({regis:true})
    console.log(505)
  }

  login = (e) => {
    e.preventDefault();
    this.setState({regis:false})
    console.log(505)
  }
  render() {
    return (
      <div className="App">
        {!this.state.regis ? 
          <Login
            registro={this.registro}
          />
          :
          <Registro
          login={this.login}
          />
        }
      </div>
    );
  }
}

export default App;
