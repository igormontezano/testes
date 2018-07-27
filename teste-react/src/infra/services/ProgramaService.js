import $ from "jquery"; 

import config from '../../config';

export default class ProgramaService {

    get(codigo){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": config.url+"/service/programa/"+codigo,
            "method": "GET"
        }
        return $.ajax(settings);
    }

}