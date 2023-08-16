async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var CEPconvertido = await consultaCEP.json()
        if(CEPconvertido.erro){
            throw Error('CEP não existente')
        }
        console.log(CEPconvertido)
        return CEPconvertido
    } catch(erro){
        console.log(erro)
    }
}

