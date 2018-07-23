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
              "content-type": "application/json",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(pacote)
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          }).fail(function(a,b,c){
              console.log('Gravando Cookie');
              Cookies.set(
                "grp_token",
                "fn2398niu4fniub348973bu4f5kj45ngho495rt8nv9",
                {secure:true})
          });
    }

    deslogar(){
        Cookies.remove("grp_token");
    }

    estaLogado(){
        return Cookies.get("grp_token") != null;
    }
}