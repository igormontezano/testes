import React, { Component } from 'react';
// import $ from "jquery";

import Login from './infra/componentes/Login';

import './App.css';
import { Button } from 'primereact/button';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      mostraLogin: false
    }
  }

  componentDidMount() {
    // testar autenticacao
    // senão autenticado, abrir modal login
  }

  autenticar(event){
    event.preventDefault();
    this.setState({
      mostraLogin: true
    })
  }

  hideLogin(){
    this.setState({
      mostraLogin: false
    })
  }

  render() {
    return (
      <div className="App">
        <Login mostrar={this.state.mostraLogin} onHide={this.hideLogin.bind(this)} />
        <Button label="Login" icon="pi pi-check" onClick={this.autenticar.bind(this)} />
      </div>
    );
  }
}

export default App;
