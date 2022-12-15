/*
    - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  e strings;
    - Considerando este array, substitua os "X" da frase abaixo pelas informações  corretas;
    - Gere essas informações à partir de um for loop;
    - Exiba a frase no console.

        "O crazyArray tem X booleans, X números e X strings."
*/

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]

// Como a questão pede:

    function count(array) {
        let countBool = 0, countNumber = 0, countString = 0

        for (let i=0; i<array.length; i++) {
            if (typeof (array[i]) === 'boolean') {
                countBool++
            } else if (typeof (array[i]) === 'string') {
                countString++
            } else {
                countNumber++
            }
        }

        return `O crazyArray tem ${countBool} booleans, ${countNumber} números e ${countString} strings.`
    }

    console.log(count(crazyArray))

/* ------------------- */

// Como eu faria:

    const countOfTypes = array => {
        let countForTypes = { number: 0, string: 0, bool: 0 }
        array.forEach(item => {
            typeof item === 'boolean' ? countForTypes.bool++ 
                : typeof item === 'string' ? countForTypes.string++
                : countForTypes.number++
        })

        return `O crazyArray tem ${countForTypes.bool} booleans, ${countForTypes.number} números e ${countForTypes.string} strings.`
    }

    console.log(countOfTypes(crazyArray))


