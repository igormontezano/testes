import BaseService from "./BaseService";

export default class ProgramaService extends BaseService {

    get(codigo){
        return this.conex.get("/service/programa/"+codigo);
    }

}