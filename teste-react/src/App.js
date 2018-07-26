import React, { Component } from 'react';
// import $ from "jquery";

import './App.css';
import { Button } from 'primereact/button';

// Config
import Intl from './i18n';
// Servicos
import AutenticacaoService from './infra/services/AutenticacaoService';
// Componentes Thema
import Login from './infra/componentes/Login';


export class App extends Component {

  constructor(){
    super();
    // this.homeBundle = loader(config.lang ,config.bundleDir,"home");
    this.state = {
      logado: false,
      mostraLogin: false
    }
    this.auth = new AutenticacaoService();
    this.intl = new Intl();
    console.log(this.intl.get("login"));
  }

  componentDidMount() {
    // testa autenticacao
    // senão autenticado, abrir modal login
    var that = this;

    this.auth.estaLogado().then(
      () => that.setState({logado: true})
    ).catch(
      function(){
        console.log('Retornou false... abrindo login');
        that.abrirLogin();
    });
  }

  abrirLogin(){
    this.setState({
      logado: false,
      mostraLogin: true
    });
  }

  autenticar(event){
    event.preventDefault();
    this.abrirLogin();
  }

  deslogar(){
    this.auth.deslogar();
    this.setState({
      logado: false
    });
  }

  hideLogin(){
    this.setState({
      mostraLogin: false,
      logado: true
    })
  }

  render() {
    return (
      <div className="App">
        <Login mostrar={this.state.mostraLogin} onHide={this.hideLogin.bind(this)} />
        <Button label="Login" disabled={this.state.logado ? "disabled" : "" } icon="pi pi-check" onClick={this.autenticar.bind(this)} />
        <Button label="Logout" disabled={this.state.logado ? "" : "disabled" } icon="pi pi-user" onClick={this.deslogar.bind(this)} />
      </div>
    );
  }
}

export default App;
