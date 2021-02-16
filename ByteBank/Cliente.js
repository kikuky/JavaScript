export class Cliente{
    get cpf(){
        return this._cpf;
    }

<<<<<<< HEAD
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    
    autenticar(){
        return true;
    }

=======
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
>>>>>>> JavaScript
}