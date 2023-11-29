const logradouro = document.querySelector("#logradouro")
const numero = document.querySelector("#numero")
const complemento = document.querySelector("#complemento")
const bairro = document.querySelector("#bairro")
const estado = document.querySelector("#estado")
const cidade = document.querySelector("#cidade")
const celular = document.querySelector("#celular")
const cep = document.querySelector("#cep")

cep.addEventListener("keyup", (e) => {

    if (cep.value.length == 8) {
        pegarEndereço(cep.value)
    }

})

async function pegarEndereço(cep) {

    const apiURL = `https://viacep.com.br/ws/${cep}/json`

    const response = await fetch(apiURL)

    const data = await response.json()

    logradouro.value = data.logradouro
    logradouro.disabled = false

    bairro.value = data.bairro
    bairro.disabled = false

    estado.value = data.uf
    estado.disabled = false

    cidade.value = data.localidade
    cidade.disabled = false

    numero.disabled = false
    complemento.disabled = false
}