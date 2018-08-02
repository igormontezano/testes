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

// Servicos
import AutenticacaoService from '../services/AutenticacaoService';
import config from '../../config';

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
        .then(function (response) {
            console.log('Sucesso no login!',response.data);
            that.setState({logado: true});
            that.props.onHide();
        }).catch(function(a,b,c){
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
        if(config.usuario && config.senha){
            this.usuarioInput.inputEl.value = config.usuario;
            this.senhaInput.inputEl.value = config.senha;
            let that = this;
            this.setState((state) => {
                state.usuario = config.usuario;
                state.senha = config.senha;
                that.login();
            });
        }
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
                    width="450px"
                    modal={true}
                    footer={footer}
                    minY={70}
                    onHide={this.props.onHide}
                    onShow={this.onShow.bind(this)}
                    maximizable={false}>
                    <form>
                        <Messages ref={(el) => {this.messages = el;} } />
                        <div className="ui-g">
                            <div className="ui-g-6">
                                <label htmlFor="usuario">Usuário</label>
                            </div>
                            <div className="ui-g-6">
                                <InputText
                                    id="usuario"
                                    ref={(input) => { this.usuarioInput = input; }} 
                                    required={true}
                                    value={this.state.usuario}
                                    onChange={(e) => this.setState({usuario: e.target.value})}
                                    onKeyPress={this._handleKeyPress.bind(this)}
                                />
                            </div>
                            <div className="ui-g-6">
                                <label htmlFor="senha">Senha</label>
                            </div>
                            <div className="ui-g-6">
                                <Password
                                    id="senha"
                                    autoComplete='off'
                                    required={true}
                                    feedback={false}
                                    ref={(input) => { this.senhaInput = input; }} 
                                    value={this.state.senha}
                                    onKeyPress={this._handleKeyPress.bind(this)}
                                    onChange={(e) => this.setState({senha: e.target.value})}
                                />
                            </div>
                        </div>
                    </form>
                </Dialog>

            </div>
        )
    }
} 