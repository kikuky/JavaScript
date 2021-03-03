class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime()); //Programação defensiva, para que a data não possa ser alterada
        this._quantidade = quantidade; //O símbolo '_' serve como uma convenção entre os desenvolvedores para informar que o valor não deve ser acessado diretamente, um valor privado
        this._valor = valor;
        Object.freeze(this); //Congela o objeto Negociação ao ser instanciada, para que seus valores não possam ser alterados
    }

    //Encapsulamentos para que os valores não possam ser acessados diretamente
    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {

        return new Date(this._data.getTime()); //Para não poder ser alterada via n1.data.setDate();
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {
        
        return this._valor;
    }

}