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
    
    
}

