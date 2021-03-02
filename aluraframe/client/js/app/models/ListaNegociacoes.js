class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes); //para evitar que se possa adicionar novas negociacoes sem ser pelo metodo adiciona
    }

}