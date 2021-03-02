class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada'); //não pode ser chamada diretamente, apenas seus metodos DateHelper.textoParaData()
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; 
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {     //teste para verificar se a data tem 4 digitos/2 digitos/2 digitos -> expressão regular
            throw new Error('Deve estar no formato AAAA/MM/DD'); 
        }

        return new Date(texto.split('-'));        
    }

}