import React, { Component } from 'react';
import shortid from 'shortid';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { Button } from 'primereact/button';
import {BreadCrumb} from 'primereact/breadcrumb';

// import Intl from './i18n';

// Servicos
import AutenticacaoService from './infra/services/AutenticacaoService';
import ProgramaService from './infra/services/ProgramaService';
// Componentes Thema
import Login from './infra/componentes/Login';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      logado: false,
      mostraLogin: false,
      components: [],
      controlado: {}
    }
    this.auth = new AutenticacaoService();
    
    this.programas = [
      {label: 'Programa1'},
      {label: 'Programa2'},
      {label: 'Programa3'}
    ];
    this.home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'};
    
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

    let programaService = new ProgramaService();
    programaService.get('689429').done(
      function(data){
        console.log("Abrindo programa...");
        that.setState({
          controlado: data
        });
        that.addComponent(data.componente);
      }
    );

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

  addComponent = async type => {
    console.log(`Loading ${type} component...`);
    
    import(`./programas/${type}.js`)
      .then(component =>
        this.setState({
          components: this.state.components.concat(component.default)
        })
      )
      .catch(error => {
        console.error(`"${type}" not yet supported`);
      });
  };

  render() {

    const { components } = this.state;

    const componentsElements = components.map(Component => (
      <Component key={shortid.generate()} />
    ));

    return (
        <div className="container">

          

          <div  className="row">
            <div className="col-md-12">
              <BreadCrumb model={this.programas} home={this.home}/>
              <div className="m-header">
                <h1><i className="fa fa-user fa-lg"></i>{this.state.controlado.descricao}</h1>
                <a href=""><i className="fa fa-question-circle fa-lg pull-right"></i></a>
              </div>                   
            </div>

          </div>

          <div>
              {componentsElements}
          </div>
          
          <Login mostrar={this.state.mostraLogin} onHide={this.hideLogin.bind(this)} />
          <Button label="Login" disabled={this.state.logado ? "disabled" : "" } icon="pi pi-check" onClick={this.autenticar.bind(this)} />
          <Button label="Logout" disabled={this.state.logado ? "" : "disabled" } icon="pi pi-user" onClick={this.deslogar.bind(this)} />


        </div>
    );
  }
}

export default App;
