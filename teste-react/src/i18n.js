import i18n  from './resources/i18n/home_pt_BR';

export default class Intl {
    
    constructor(){
        this.currentLang = 'en';
    }

    setLanguage(id) {
      this.currentLang = id;
    }
    
    get(text) {
      return (i18n[this.currentLang] && i18n[this.currentLang][text]) || text;
    }

}
