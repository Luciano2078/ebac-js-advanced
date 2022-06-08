class Animal {
    constructor(especie){
        this.especie = especie;
    }

    falar(){
        console.log(this.especie + ' au au au')
    }

    comer(){
        console.log(this.especie + ' come ração')
    }

    dormir(){
        console.log(this.especie + ' dorme o dia todo')
    }
}

const cachorro = new Animal('Tigrao')

cachorro.falar()
cachorro.comer()
cachorro.dormir()