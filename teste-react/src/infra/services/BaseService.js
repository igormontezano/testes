import axios from 'axios';
import config from '../../config';
import Cookies from "js-cookie";

export default class BaseService {

    constructor(){
        this.token = Cookies.get("grp_token");
        
        if(this.token){
            this.configuraConexaoAutenticada();
        } else {
            this.conex = axios.create({
                baseURL: config.url,
                timeout: 1000,
                headers: {"content-type": "application/json"}
            });
        }
    }
    
    configuraConexaoAutenticada(){
        this.conex = axios.create({
            baseURL: config.url,
            timeout: 1000,
            headers: {
                "content-type": "application/json",
                "authorization": this.token
            }
        });
    }
}