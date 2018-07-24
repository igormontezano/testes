import React, { Component } from 'react';
// import $ from "jquery";

import './App.css';
import { Button } from 'primereact/button';

// Servicos
import AutenticacaoService from './infra/services/AutenticacaoService';
// Componentes Thema
import Login from './infra/componentes/Login';


export class App extends Component {

  constructor(){
    super();
    this.state = {
      mostraLogin: false
    }
    this.auth = new AutenticacaoService();
  }

  componentDidMount() {
    // testa autenticacao
    // senão autenticado, abrir modal login
    var that = this;

    this.auth.estaLogado().catch(
      function(){
        console.log('Retornou false... abrindo login');
        that.abrirLogin();
    });
  }

  abrirLogin(){
    this.setState({
      mostraLogin: true
    });
  }

  autenticar(event){
    event.preventDefault();
    this.abrirLogin();
  }

  deslogar(){
    this.auth.deslogar();
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
        <Button label="Logout" icon="pi pi-user" onClick={this.deslogar.bind(this)} />
      </div>
    );
  }
}

export default App;
