//exercice 1
function bigInt(x, y, z) {
    return Math.max(x, y, z);
}

console.log(bigInt(12, 5, 8));

//Exercice 2 
function getRandomInt(min, max) {
    const plafondMinimum = Math.ceil(min);
    const plancherMaximum = Math.floor(max);
    return Math.floor(
        Math.random() * (plancherMaximum - plafondMinimum) + plafondMinimum,
    );
}
console.log(getRandomInt(3, 6));

//Exercice 3 
function comparA(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        // x et y sont égaux (peut être -0 et 0) ou sont tous les deux NaN
        return x === y || (x !== x && y !== y);
    } else {
        return false;
    }
    return (x, y), (x === y);
}
console.log(comparA(4.0, 4));

function comparB(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        // x et y sont égaux (peut être -0 et 0) ou sont tous les deux NaN
        return a === b || (a !== a && b !== b);
    }
    return (a, b), (a === b);
}
console.log(comparB(4, '4'));

//Exercice 4 
function numberOf(n) {
    if (n % 2 == 0) {
        for (let i = 0; i <= n; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    } else if (n % 7 == 0) {
        for (let i = 0; i <= n; i++) {
            if (i % 7 == 0) {
                console.log(i);
            }
        }
    } else if (n % 7 == 0 || (n % 2 == 0 && n % 3 == 0)) {
        for (let i = 0; i <= n; i++) {
            if (n % 7 == 0 || (n % 2 == 0 && n % 3 == 0)) {
                console.log(i);
            }
        }
    }
}
numberOf(5);
//Exercice 5 
function compteurPile(n) {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        if (Math.random() < 0.5) {
            counter++;
        }
    }
    return counter;
}
console.log(compteurPile(8));

function compteurPileFace(n) {
    let pile = 0;
    let face = 0;
    for (let i = 0; i < n; i++) {
        if (Math.random() < 0.5) {
            pile++;
        } else {
            face++;
        }
    }
    return { pile, face };
}
console.log(compteurPileFace(5));
//Exercice 6 
function estPremier(n) {
    if (n <= 1) {
        return false;

    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(estPremier(0));
console.log(estPremier(1));
console.log(estPremier(2));
console.log(estPremier(3));
console.log(estPremier(4));
console.log(estPremier(87178291197));