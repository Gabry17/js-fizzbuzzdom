//fare un ciclo che stampa i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    
    let multipli;

    if (i % 3 === 0) {
        multipli = 'fizz';
    }

    if (i % 5 === 0) {
        multipli = 'buzz';
    }

    if (i % 3 === 0 && i % 5 === 0) {
        multipli = 'fizzbuzz';
    }

    console.log(i, multipli);
    

    //BONUS
    
    let yellowgreen;
    if (i % 3 === 0) {
        yellowgreen = 'yellow';
    }

    if (i % 5 === 0) {
        yellowgreen = 'green';
    }

    if (i % 3 === 0 && i % 5 === 0) {
        yellowgreen = 'azure';
    }

    if (i % 3 !== 0 && i % 5 !== 0) {
        multipli = i;
    }

    let box = document.querySelector('.container');
    box.innerHTML += `<div class='row ${yellowgreen}'>${i, multipli}</div>`;

}

