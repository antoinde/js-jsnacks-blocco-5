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