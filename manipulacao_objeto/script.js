/*
Crie um objeto Pessoa com as propriedades nome, idade e cidade. Mostre esses
dados em uma tabela e, ao clicar em um botão, permita a atualização das informações
através de um formulário.
*/

const form = document.querySelector("#form")

form.addEventListener("click", function(evento){
    evento.preventDefault()
    const popup = document.querySelector("dialog")
    popup.showModal()
})
