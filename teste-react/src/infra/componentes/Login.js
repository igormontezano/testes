import React from 'react';

// PrimeReact
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


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
        auth.logar(this.state.usuario, this.state.senha);
        this.setState({logado: true});
        this.props.onHide();
    }
    
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.login();
        }
    }
    componentDidMount(){
        // console.log(this.usuarioInput);
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
                    width="250px"
                    modal={true}
                    footer={footer}
                    minY={70}
                    onHide={this.props.onHide}
                    maximizable={false}>
                    <form>
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