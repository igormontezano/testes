import $ from "jquery"; 
import Cookies from "js-cookie";

import config from '../../config';

export default class AutenticacaoService {
    logar(user, pass){

        let pacote = {
            usuario: user,
            senha: pass,
            origem: 'portal',
            uuid: new Date().getTime()
        };
        
        console.debug(pacote);
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": config.url+"/service/autenticacao/",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": JSON.stringify(pacote)
        };
        
        return $.ajax(settings);
    }

    deslogar(){
        Cookies.remove("grp_token");
    }

    estaLogado(){
        var that = this;
        return new Promise(function(resolve, reject){
            const token = Cookies.get("grp_token");
            if(token != null){
                that.validaToken().done(function (response) {
                    console.log("validado!", response);
                    resolve();
                }).fail(function(a,b,c){
                    console.log("NÃO validado!");
                    reject();
                })
            } else {
                reject();
            }
        });
    }

    validaToken(){
        console.log("Validando Token!")
        const token = Cookies.get("grp_token");

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": config.url+"/service/autenticacao/informacoesToken/",
            "method": "POST",
            "headers": {
              "authorization": token,
              "content-type": "application/json"
            },
            "processData": false,
            "data": token
          }
          
        return $.ajax(settings);
    }

}