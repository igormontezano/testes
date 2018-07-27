import React, { Component } from 'react';
import config from '../config';

import {Fieldset} from 'primereact/fieldset';
import {InputText} from 'primereact/inputtext';
import {Captcha} from 'primereact/captcha';
import {Button} from 'primereact/button';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class Programas extends Component {

    constructor(){
        super();
        this.state = {
            token: ''
        }
    }

    showResponse(response) {
        console.log(response);
    }

    validar(event){
        event.preventDefault();
        console.log('Ir ao backend e validar o token', this.state.token);
    }

    render(){
        return (
            <div>
                <form>
                    <Fieldset legend="Autenticação - Entregas - Atendimentos e transferências">
                        <label htmlFor="token">Token</label>

                        <InputText  id="token"
                                    ref={(input) => { this.tokenInput = input; }} 
                                    required={true}
                                    value={this.state.token}
                                    onChange={(e) => this.setState({token: e.target.value})}
                        />
                        <Captcha siteKey={config.reCaptcha_siteKey} onResponse={this.showResponse.bind(this)}></Captcha>
                        <Button label="Validar" icon="pi pi-check" onClick={this.validar.bind(this)} />
                    </Fieldset>
                </form>
            </div>
        );
    }

}