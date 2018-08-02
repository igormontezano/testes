import Cookies from "js-cookie";
import BaseService from "./BaseService";

export default class AutenticacaoService extends BaseService {

    logar(user, pass){
        let pacote = {
            usuario: user,
            senha: pass,
            origem: 'portal',
            uuid: new Date().getTime()
        };
        return new Promise(
            (resolve, reject) => {
            this.conex.post('/service/autenticacao/', pacote
            ).then((response) => {
                Cookies.set("grp_token",response.data);
                super.configuraConexaoAutenticada();
                resolve(response);
            }).catch(
                () => reject() );
        });
    }

    deslogar(){
        Cookies.remove("grp_token");
        this.token = null;
    }

    estaLogado(){
        return new Promise(
            (resolve, reject) => {
            if(this.token != null){
                this.validaToken().then(
                    (response) => resolve(response)
                ).catch(
                    (a,b,c) => {
                    this.deslogar();
                    reject();
                })
            } else {
                this.deslogar();
                reject();
            }
        });
    }

    validaToken(){
        return this.conex.post("/service/autenticacao/informacoesToken/",this.token);
    }
}