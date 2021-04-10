class House{
    constructor(name) {
        this.name = name;
        this.lakok = [];
    }

    csenget() {
        let f = this.lakok.length;
        if ( f > 0) {
            let i = Math.floor(Math.random() * f);
            return "Máris nyitom az ajtót. \n" + this.lakok[i].beszel();
        }
    }
    
    hazajon(obj) {
        this.lakok.push(obj);
    }
}

class Ember{
    constructor(name) {
        this.name = name;
        this.bemut = "Üdvözlöm, a nevem: " + this.name;
    }

    beszel() {
        alert(this.bemut);
    }
}

class Women extends Ember{
    constructor(name, szemszin) {
        super(name);
        this.szemszin = szemszin;
    }
}

class Ferfi extends Ember{
    constructor(name, kor) {
        super(name);
        this.kor = kor;
    }
}