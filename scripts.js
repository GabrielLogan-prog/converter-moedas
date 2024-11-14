//cotação das moedas 
/**
 * variavel global que guarda os preços para serem reutilizados em qualquer parte do codigo 
 * @param {number} USD 
 * variavel global que guarda os preços para serem reutilizados em qualquer parte do codigo 
 * @param {number} EUR 
 * variavel global que guarda os preços para serem reutilizados em qualquer parte do codigo 
 * @param {number} GBP 
 * 
 */
const USD = 4.89
const EUR = 6.59
const GBP = 6.10

/**
* Obtém o elemento do formulário.
 * @type {HTMLFormElement} form
 * Obtém o campo de entrada de valor (amount).
 * @type {HTMLInputElement}
 * Obtém o campo de seleção de moeda (currency).
 * @type {HTMLSelectElement}
 * Obtém o rodapé (footer) dentro do main.
 * @type {HTMLElement}
 * Obtém o campo de descrição (description).
 * @type {HTMLTextAreaElement}
 * Obtém o elemento que exibirá o resultado (result).
 * @type {HTMLElement}
 * 
 */

// obtendo elementos do formulario para utilização posterior
const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")



// manupulando imput amount para receber somente numeros 
amount.addEventListener("input" , () =>{

const hasCharactersRegex = /\D+/g   ///verifica se no imput tem letras 

amount.value = amount.value.replace(hasCharactersRegex,"") // subistitui no imput que esta sendo digitado as letras por nada 


}) 

//capturando seleção do form 

/**
 * 
 * @param {SubmitEvent} event evento de submit do formulario (form)
 * 
 */

form.onsubmit = (event) => {
   event.preventDefault()
    // envia os parametros de acordo com a seleção do usuario
   switch(currency.value){
    case "USD":
        convertCurrency(amount.value ,USD,"US$") 
        break
    case "EUR":
        convertCurrency(amount.value , EUR , "€")    
        break
    case "GBP":
        convertCurrency(amount.value , GBP , "£")    
        break

   }
   
}

/**
 * função que recebe os paramentros amount , price e symbol para calcular 
 * @param {number} amount 
 * @param {number} price 
 * @param {string} symbol 
 */
 
function convertCurrency(amount, price ,symbol) {

try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
     let finalPrice = amount * price   //executa o calculo to valor final
     
//Aplica oo valor do calculo para a exibição no h1 result , com o replace , substirui a cifra do BRL R$ por nada na exibição
   result.textContent = `${formatCurrencyBRL(finalPrice).replace("R$","")} Reais` 
      
    footer.classList.add("show-result")// aplica a classe que exibe o footer na pagina 
    
} catch (error) {
    footer.classList.remove("show-result")//remove a classe do footer , removendo ele da tela 
console.log(error)
    
}

}

// esta função ira formatar o numero da variavel total da conta do valor final 
// ela retorna um valor numerico formatado de acordo com o parametro de idioma e pais selecionado
// exibindo uma virgula no lugar do ponto , e limitando a exibição a 2 caracteres apos a virgula 
// R$ 12.24
/**
 * 
 * @param {number} value //valor numerico recebido para converção
 * @returns // retorna a o valor formatado ex: R$ 12.24
 */
function formatCurrencyBRL(value) {
return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL"
})

}
