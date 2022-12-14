/* 
    Julia e Caio estão aprendendo a programar em JavaScript na DNC.
    Juntos eles querem construir um algoritmo capaz de informar,
    no console, qual dos dois é mais velho. 
    Ajude-os a elaborar esse algoritmo com as seguintes condições:

        a) Se o valor da variável `idadeJulia` for maior que o valor da variável `idadeCaio`:
        - Atribua à variável `verificaIdadePessoas` a string `'Julia é mais velha que Caio'`;

        b) Caso a condição anterior seja falsa:
        - Verifique se o valor da variável `idadeCaio` é maior que o valor da variável `idadeJulia`;
        - Atribua à variável `verificaIdadePessoas` a string `'Caioé mais velho que Julia'`.

        c) Se nenhuma das condições anteriores for verdadeira:
        - Atribua à variável `verificaIdadePessoas` a string `'Possuem a mesma idade'`;

        - Utilize as seguintes variáveis e seus respectivos valores no código:
*/ 

let idadeJulia = 25;
let idadeCaio = 21;
let verificaIdadePessoas = '';

const verifyAge = (ageOfJulia, ageOfCaio) => {
    ageOfJulia > ageOfCaio ? verificaIdadePessoas = "Julia é mais velha que Caio"
     :  ageOfJulia < ageOfCaio ? verificaIdadePessoas = "Caio é mais velho que Julia"
     : verificaIdadePessoas = "Possuem a mesma idade"
    
     return verificaIdadePessoas
}

console.log(verifyAge(idadeJulia, idadeCaio))

/* ------------- */

/* 
   Chegou o verão e a clientela da sorveteria DNC cresceu. Pedro, dono do estabelecimento, 
   precisa de ajuda no controle do seu estoque. Você precisa ajudar Pedro a descobrir:

    - A quantidade de sabores de sorvete;
    - A quantidade de cobertura disponível.

        Considere as listas a seguir:

        ```jsx
        **Lista de sabores de sorvete:**
        - Chocolate
        - Morango
        - Açaí
        - Creme
        - Flocos

        **Lista de sabores de cobertura:**
        - Chocolate
        - Morango
        - Doce de leite
        ```

    - Todos os sabores de sorvete devem estar em um array na variável `sabores`;
    - Todos os sabores de cobertura devem estar em um array na variável `coberturas`;
    - Mostre no console duas mensagens informando as quantidades de sabores de cada lista, por exemplo:

    - 'Quantidade de sabores de sorvete: 5';
    - 'Quantidade de sabores de cobertura: 3'.tes variáveis e seus respectivos valores no código:
*/ 

const quantityOfIce = () => {
    let sabores = ["Chocolate", "Morango", "Açaí", "Creme", "Flocos"];
    let coberturas = ["Chocolate", "Morango", "Doce de leite"];

    return `
            Quantidade de sabores de sorvete: ${sabores.length}\n
            Quantidade de sabores de cobertura: ${coberturas.length}
           `
};

console.log(quantityOfIce());

/* ------------- */

/* 
   Uma cafeteria te contratou para criar um validador de senhas. 
   O dono da cafeteria solicitou que você criasse um programa que verifique 
   se a senha digitada é exatamente igual a senha escolhida para acessar o wi-fi.
*/ 

const validateOfPassword = (passwordLogin, realPassword) => passwordLogin === realPassword ? "Você está logado" : "Senha incorreta"

console.log(validateOfPassword(123, 123)) 

/* ------------- */

/* 
   A DNC está preparando uma festa muito importante para comemorar seu aniversário de 10 anos. 
   Ela precisa da sua ajuda para desenvolver um algoritmo que confere se o nome das pessoas
   que chegam à festa está ou não na lista de convidados 
   *(afinal, não é legal ter penetras na festa né?)*.

    - Se encontrar o nome na lista retorne:
        "O nome está na lista."
    - Caso contrário:
        "O nome não está na lista."
*/ 

let realGuests = ["Celso", "Letícia", "Neymar", "Astri"]
let guestsForValidate = ["Celso", "Letícia", "Arlequina", "Astri", "Vicente"]

const listVaidate = (realGuests, guestsForValidate) => guestsForValidate.forEach((item, i) => item === realGuests[i] ? console.log(`${item} está na lista.\n`) : console.log(`${item} não está na lista.\n`))

console.log(listVaidate(realGuests, guestsForValidate))

/* ------------- */

/* 
   Daniele é uma nutricionista e acabou de criar um site para atrair mais clientes.

    **Ela precisa da sua ajuda para disponibilizar uma calculadora de IMC (Índice de Massa
    Corporal) em seu site.**

    A classificação do Índice de Massa Corporal (IMC), pode ajudar a identificar obesidade
    ou desnutrição em crianças, adolescentes, adultos e idosos.

    O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula:

    ```jsx
    IMC = peso/ (altura x altura)
    ```

    **👀 Atenção:** o peso é dado em Kg (quilogramas), a altura em m (metros) e o IMC em kg/m2 (quilograma por metro quadrado).

    Depois de obter o resultado, é retornado para a pessoa em que faixa ela se encontra, podendo
    indicar:

        - Abaixo do peso, quando o resultado é menor que 18,5 kg/m2;
        - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
        - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
        - Obesidade, quando o resultado é maior que 30 kg/m2.
*/ 

const calculatorOfIMC = (height, weight) => {
    const result = weight / (height * height)

    if (result < 18.5) {
        return "Abaixo do peso\n"
    } else if (result > 18.5 && result < 24.9) {
        return "Normal\n"
    } else if (result > 24.9 && result < 30) {
        return "Sobrepeso\n"
    } else if (result > 30) {
        return "Obesidade\n"
    } 
}

console.log(calculatorOfIMC(1.76, 40)) 

/* ------------- */

/* 
  Camille é dona de uma sapataria onde todas as pessoas da área de vendas 
  recebem um salário fixo acrescido de 4% de comissão sobre as vendas. 
  A dona da sapataria precisa da sua ajuda para desenvolver um programa que recebe o 
  salário fixo dos vendedores da sapataria e o valor de suas vendas,  
  calculando e retornando a comissão e seu salário final no seguinte formato:

*"A comissão é: x e o ganho total é: y".*
*/ 

const sale = [["Sapato caro", 500], ["Sapato intermediário", 250], ["Sapato de entrada", 50]]

const calculatorOfMoney = (fixeValue, sale) => {
    sale.forEach(item => console.log(`Produto vendido: ${item[0]}, R$ ${item[1]}\n`));
    sale.forEach(item => console.log(`Comissão do ${item[0]}: R$ ${(item[1]/100) * 4}`));
    const commitionTotal = sale.reduce((a, b) => a + (b[1]/100) * 4, 0);

    return `A comissão total é: ${commitionTotal} e o ganho total é: ${fixeValue + commitionTotal}`
}

console.log(calculatorOfMoney(900, sale))

/* ------------- */

/* 
  O restaurante DNC precisa da sua ajuda para desenvolver um sistema 
  que ajude a calcular a taxa do garçom (gorjeta) e o valor total a ser pago, 
  de acordo com o valor do jantar. A gorjeta sempre será 10% do valor total 
  gasto no restaurante. 

    O retorno deve seguir o exemplo abaixo:

        - Valor do jantar: R$80,00
        - Taxa do garçom: R$8,00
        - Total a pagar: R$88,00
*/ 

const calcGorjeta = valueDinner => {
    taxaGarçom = (valueDinner/100) * 10
    return `Taxa do garçom: R$ ${taxaGarçom}\nTotal a pagar: R$ ${(taxaGarçom + valueDinner).toFixed(2)}`
}

console.log(calcGorjeta(80))

/* ------------- */

/* 
  Dada uma string de texto, retorne quantas vogais ela possui.
*/ 

const vogals = ["a", "e", "i", "o", "u"]

const countVogals = text => {
    let count = 0;
    text.split("").forEach(item => vogals.includes(item) ? count++ : count)

    return `Há ${count} vogais dentro de '${text}'`
}

console.log(countVogals("bela"))

/* ------------- */

/* 
    Dado um número de dias, mostre a quantos anos, meses e dias ele é equivalente.

    Entrada:
        920
    Resultado:
        2 anos, 6 meses e 2 dias
*/ 

const exactDate = day => `${Math.floor(day/365)} anos, 
                          ${Math.floor(day % 365 / 30)} meses e 
                          ${Math.floor((day % 365 % 30) - 1)} dias `

console.log(exactDate(400))









