const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/* Eventos de JS */
button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputNameValue = nome.value;
    const inputIdadeValue = idade.value;
    const inputTelefoneValue = telefone.value;
    const templateHTML = `<li> Nome: ${inputNameValue}, Idade: ${inputIdadeValue}, Telefone: ${inputTelefoneValue} </li>`;

    /* Condição */ 
    if (inputNameValue, inputIdadeValue, inputTelefoneValue === "") {
        alert("Preencha o campo vazio");
        return false;
    }

    /*Incluindo itens no HTML*/
    lista.innerHTML += templateHTML;

    /* Limpando meu campo */
    nome.value = "";
    idade.value = "";
    telefone.value = "";
});