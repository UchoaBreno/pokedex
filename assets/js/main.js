
const offset = 0
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// manipula a resposta do servidor(promessa do servidor)
fetch(url)

    //transformando o response em uma promessa convertido em JSON
    .then((response) => response.json())

    //recebendo a promessa e printando
    .then((jsonBody) => console.log(jsonBody))

    //manipula o erro do servidor
    .catch((error) => console.error(error))
