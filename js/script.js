// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");


/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */



/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


/* SNACK 1 -----------------------svolgimento---------------------------*/
/* 

 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti

*/
const arraySquadreCalcio = //nome:   punti_fatti:   falli_subiti:
[
    {
        nome: 'Milan',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Juventus',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Roma',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Napoli',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Palermo',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Torino',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Parma',
        punti_fatti: '',
        falli_subiti: ''
    },
    {
        nome: 'Inter',
        punti_fatti: '',
        falli_subiti: ''
    },
    
    
    
];

//genero punti random
for(let i=0; i<arraySquadreCalcio.length; i++) {
        const oggetto = arraySquadreCalcio[i];
        //pusho dentro i numeri random
        oggetto.punti_fatti=Math.floor(Math.random() * 10);
        oggetto.falli_subiti=Math.floor(Math.random() * 10);
}
//stampa array
console.log(arraySquadreCalcio);


/* SNACK 2 -----------------------svolgimento---------------------------*/
/* 

 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.

*/
let array=[];
start(array, 5, 15);
//stampa array
console.log(array);

function start(array, a, b) {
    for(let i=a; i<=b; i++) {
        array.push(i);
    }
    return array;
}
/* SNACK 3 -----------------------svolgimento---------------------------*/
/* 

 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

// STEP 1: Crea 10 oggetti che rappresentano una zucchina.
const arrayDiZucchine = //   tipologia:   lunghezza:     peso: (gr)
[   
    // i dati sono stati tutti inventati
    {
        tipologia: 'Nera',
        lunghezza: 10,
        peso: 75
    },
    {
        tipologia: 'Romanesca',
        lunghezza: 11,
        peso: 64

    },
    {
        tipologia: 'Fiorentina',
        lunghezza: 13,
        peso: 46
    },
    {
        tipologia: 'Napoletana',
        lunghezza: 14,
        peso: 87
    },
    {
        tipologia: 'Tonda',
        lunghezza: 15,
        peso: 35
    },
    {
        tipologia: 'Trombetta',
        lunghezza: 16,
        peso: 90
    },
    {
        tipologia: 'Patisson',
        lunghezza: 17,
        peso: 65
    },
    {
        tipologia: 'Gialla',
        lunghezza: 18,
        peso: 40
    },
    {
        tipologia: 'Friulana',
        lunghezza: 19,
        peso: 98
    },
    {
        tipologia: 'Crookneck',
        lunghezza: 20,
        peso: 16
    }
    
];

// STEP 2: Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const moreThan15 = [];
const lessThan15 = [];

for(let i=0; i<arrayDiZucchine.length; i++) {
    //prendo il primo oggetto
    let object = arrayDiZucchine[i];
    //eseguo un controllo
    console.log(object);
    if(object.lunghezza>=15){
        //inserisci oggetto dentro l'array moreThan15
        moreThan15.push(object);
    }
    else{
        //inserisci oggetto dentro l'array lessThan15
        lessThan15.push(object);
    }
}
// stampa moreThan15 e lessThan15
console.log("moreThan15: ");
let countMoreThan15 = 0;
for(let i=0; i<moreThan15.length; i++){
    const item = moreThan15[i];
    countMoreThan15 = countMoreThan15 + item.peso;
    console.log(item);
}

console.log("lessThan15: ");
let countLessThan15 = 0;
for(let i=0; i<lessThan15.length; i++){
    const item = lessThan15[i];
    countLessThan15 = countLessThan15 + item.peso;
    console.log(item);
}

// STEP 3: Stampa separatamente quanto pesano i due gruppi di zucchine.

console.log("Peso totale di moreThan15: " + countMoreThan15 + " grammi");
console.log("Peso totale di lessThan15: " + countLessThan15 + " grammi");

