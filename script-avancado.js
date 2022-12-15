/* 
   Luciano abriu uma lanchonete e precisa criar um menu de opções 
   para que as pessoas
   consigam escolher qual lanche pedirão.

    Você precisa criar um sistema que recebe o número da opção escolhida conforme 
    a tabela abaixo e retorne o nome do lanche que a pessoa pediu, 
    para que a cozinha comece a preparar o delicioso sanduíche!

    "1 - X-Salada"
    "2 - X-Bacon"
    "3 - X-Calabresa"
    "4 - X-Burguer"
    "5 - Triplo Burguer com JS"

    Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:
    "Não temos esta opção ainda :("
*/ 

const choseFoods = () => {
    const food = prompt("Qual lanche você deseja?\nLista:\n1 - X-Salada\n 2 - X-Bacon\n 3 - X-Calabresa\n 4 - X-Burguer\n 5 - Triplo Burguer com JS")
    switch(Number(food)) {
        case 1:
            alert("X-Salada está no forninho")
            break;
        case 2:
            alert("X-Bacon está assando")
            break;
        case 3:
            alert("X-Calabresa está em preparo")
            break;
        case 4:
            alert("X-Burguer está saindo")
            break;
        case 5:
            alert("Triplo Burguer com JS... É pra já")
            break;
        default:
            alert("Não temos esta opção ainda :(")
            break;
    }
}

// choseFoods()

/* ------------- */

/* 
   João precisa ajudar sua filha Maria a estudar a tabuada do 3 e do 7, 
   e teve a ideia de usar a tecnologia ao seu favor, contudo precisa da sua ajuda:

    Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 3 e 7. 
    Exiba todas as operações com seus respectivos resultados 
    no console do seu navegador.

    > 👀 Para exibir as operações no console do seu navegador, 
    você pode utilizar duas estruturas de repetição for aninhadas, 
    que vão percorrer item a item. Para começar, você pode usar a 
    constante multiplicador dada a seguir:

*/ 

const multiplicador = [3, 7];

const multplyBy = value => {
    const arr = new Array(9).fill(0);
    arr.forEach((item, i) => console.log(`${value[0]} x ${i + 1} = ${value[0] * (i + 1)}`))
    arr.forEach((item, i) => console.log(`${i===0 ? "\n" : ""}${value[1]} x ${i + 1} = ${value[1] * (i + 1)}`))
}

multplyBy(multiplicador)

/* ------------- */

/* 
   João precisa ajudar sua filha Maria a estudar a tabuada do 3 e do 7, 
   e teve a ideia de usar a tecnologia ao seu favor, contudo precisa da sua ajuda:

    Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 3 e 7. 
    Exiba todas as operações com seus respectivos resultados 
    no console do seu navegador.

    > 👀 Para exibir as operações no console do seu navegador, 
    você pode utilizar duas estruturas de repetição for aninhadas, 
    que vão percorrer item a item. Para começar, você pode usar a 
    constante multiplicador dada a seguir:

*/ 

