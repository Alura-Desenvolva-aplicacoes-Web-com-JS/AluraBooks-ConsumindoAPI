async function buscaEndereco(cep){
    var msgErro = document.querySelector('#erro')
    msgErro.innerHTML = ""
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var CEPconvertido = await consultaCEP.json()
        if(CEPconvertido.erro){
            throw Error('CEP não existente')
        }
        var cidade = document.querySelector('#cidade')
        var logradouro = document.querySelector('#endereco')
        var estado = document.querySelector('#estado')
        var bairro = document.querySelector('#bairro')

        cidade.value = CEPconvertido.localidade
        logradouro.value = CEPconvertido.logradouro
        estado.value = CEPconvertido.uf
        bairro.value = CEPconvertido.bairro
        return CEPconvertido
    } catch(erro){
        msgErro.innerHTML = `<p>CEP inválido. Por favor, informe um CEP válido.`
    }
}

var cep = document.querySelector('#cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))