class Bind {

    constructor(model, view, ...props) { //... -> REST operator: a partir do parametro props, todos os parametros vao entrar como array

        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model)); 
        
        view.update(model);

        return proxy;

    }

}