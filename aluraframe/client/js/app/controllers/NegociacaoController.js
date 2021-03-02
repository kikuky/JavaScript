class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//Continua a manter a associação com o document
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }
    
    adiciona(event) {
        event.preventDefault();

        let data = new Date(this._inputData.value.split('-'));  /*.map((item, indice) => item - indice % 2)); 
                                                                                0 % 2 = 0 / 1 % 2 = 1 / 2 % 2 = 0  
                                                                                        (ano/mes/dia)
                                                                                (indice 0)/(indice 1)/(indice 2)
                                                                                Caso aconteça de estar o mês -1
                                                                */
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}