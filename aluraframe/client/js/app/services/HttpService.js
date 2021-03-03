class HttpService {

    get(url) {

        return new Promise((resolve, reject) =>{

            let xhr = new XMLHttpRequest();
            
            xhr.open('GET', url);
    
            //configurações
    
            xhr.onreadystatechange = () => {
    
                if(xhr.readyState == 4) { //4: Requisição concluída e resposata está pronta
                    
                    if(xhr.status == 200) {
                        
                        resolve(JSON.parse(xhr.responseText)); // JSON.parse conserte txt em objeto JavaScript
                                                
                    } else {

                        reject(xhr.responseText);
                    }
                }
    
            };
    
            xhr.send();
        });

        }

        post (url, dado) {

            return new Promise((resolve, reject) => {

                let xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onreadystatechange = () => {

                    if(xhr.readyState == 4) {

                        if(xhr.status == 200) {

                            resolve(JSON.parse(xhr.responseText));

                        } else {

                            reject(xhr.responseText);

                        }
                    }
                };

                xhr.send(JSON.stringify(dado)); //JSON.stringify converte o objeto JavaScript para o formato JSON

            });

        }

    }