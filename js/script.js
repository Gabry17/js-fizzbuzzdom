//fare un ciclo che stampa i numeri da 1 a 100

let box = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
    
    let multipli = i;

    if (i % 3 === 0 && i % 5 === 0 ) {
        multipli = 'FizzBuzz';
    } else if (i % 3 === 0) {
        multipli = 'Fizz';
    } else if (i % 5 === 0) {
        multipli = 'Buzz';
    }

    console.log(multipli);
    
    //BONUS

    let yellowgreen;

    if (i % 3 === 0 && i % 5 === 0 ) {
        yellowgreen = 'azure';
    } else if (i % 3 === 0) {
        yellowgreen = 'yellow';
    } else if (i % 5 === 0) {
        yellowgreen = 'green';
    }

    box.innerHTML += `<div class='row ${yellowgreen}'>${i, multipli}</div>`;

}

