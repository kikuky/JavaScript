class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class = "alert alert-info">${model.texto}</p>`: '<p></p>'       //se tiver texto, mostra a <div>, se não tiver, não mostra 
    }
}