import React from 'react';

// PrimeReact
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Messages} from 'primereact/messages';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Cookies from "js-cookie";

// Servicos
import AutenticacaoService from '../services/AutenticacaoService';


export default class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            usuario: '',
            senha: ''
        }
    }

    login(){
        let auth = new AutenticacaoService();
        let that = this;
        auth.logar(this.state.usuario, this.state.senha)
        .done(function (response) {
            Cookies.set("grp_token",response);
            console.log('Sucesso no login!',response);
            that.setState({logado: true});
            that.props.onHide();
        }).fail(function(a,b,c){
            that.messages.show({severity: 'error', summary: 'Erro ao logar!'});
            console.error(a,b,c);
        });
    }
    
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.login();
        }
    }
    onShow(){
        this.usuarioInput.inputEl.focus();
    }
    render() {
        const footer = (
            <div>
                <Button label="Login" icon="pi pi-check" onClick={this.login.bind(this)} />
            </div>
        );

        return (
            <div>
                <Dialog header="Login"
                    visible={this.props.mostrar}
                    width="550px"
                    modal={true}
                    footer={footer}
                    minY={70}
                    onHide={this.props.onHide}
                    onShow={this.onShow.bind(this)}
                    maximizable={false}>
                    <form>
                        <Messages ref={(el) => {this.messages = el;} } />
                        <label htmlFor="usuario">Usuário</label>
                        <InputText autoFocus
                            id="usuario"
                            ref={(input) => { this.usuarioInput = input; }} 
                            required={true}
                            value={this.state.usuario}
                            onChange={(e) => this.setState({usuario: e.target.value})}
                        />
                        <label htmlFor="senha">Senha</label>
                        <Password
                            id="senha"
                            autoComplete='off'
                            required={true}
                            feedback={false}
                            value={this.state.senha}
                            onKeyPress={this._handleKeyPress.bind(this)}
                            onChange={(e) => this.setState({senha: e.target.value})}
                        />
                    </form>
                </Dialog>

            </div>
        )
    }
} 