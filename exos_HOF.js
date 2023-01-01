// Recréez la fonction Array.prototype.map() avec la signature suivante => 'myMap(arr, func)' elle doit donc prendre un array et une fonction en paramètre

// Créer un array vide newArr (par exemple)
// let newwArr = [];
// // Boucler sur l'array passé en argument à myMap
// function myMap(arr, func) {
//     for(let i = 0; i < ar.length; i++) {
//         if (func(arr[i])) {
//             newwArr.push(arr[i]);
//         }
//     }
// }

// const exemple1 = [1, 2, 3, 4, 5];
// console.log(newwArr)
// Appeller func sur chaque element de arr
// Push le résultat de func dans newArr
// Return newArr après la fin de la boucle

// complexe à

//High order function c'est une fonction qui prend en param une fonction
// Fonction de premier ordre
// ex: Array.prototype.filter(element => !element)
// Array.prototype.filter()

/* correct */
// const exemple1 = Array.from({length: 10}, (v, k) => k + 1);

// function myMap(arr, func) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         // variable tampon
//         // let result = funct(arr[i]);
//         newArr.push(func(arr[i]));
//     }
//     return newArr;

// }
// console.log(`myMap`, myMap(exemple1, el => el**2));

// map fonctionne littéralement comme ça ce n'est hof qui prend en param une fonction et qui va boucler les éléments << décallage binaire à générer des couleur hexagonale aléatoire

// Recréez la fonction Array.prototype.filter() avec la signature suivante => 'myFilter(arr, func)' elle doit donc prendre un array et une fonction en paramètre

// Créer un array vide filteredArr (par exemple)
// Boucler sur l'array passé en argument à myFilter
// Appeller func sur chaque element de arr
// Push le résultat de func dans filteredArr SI le retour de func == true
// Return filteredArr après la fin de la boucle

// const exemple = Array.from({length: 10}, (v, k) => k + 1);

function myMap(arr, func) {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        // variable tampon
        // let result = funct(arr[i]);
        return filteredArr.push(func == true);
    }
    return filteredArr;

}
console.log(`myMap`, myMap(exemple, el => el**2));

const exemple1 = Array.from({length: 10}, (v, k) => k + 1);
function myFilter(arr, func) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        // if(func(arr[i]) === true)
        // filteredArr.push(arr[i]);
        arr[i] = func(arr[i]) && filteredArr.push(arr[i]);
    }
}
return filteredArr;

function myReduce(arr, func, initialValue = 0) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i])
    }

    return accumulator;
}
const sum =(acc, val) => acc + val
// en js les tableaux sont des objets 

console.log(`myFilter`, exemple1, el => el%2 == 0);

console.log(`myReduce`, myReduce(exemple1, sum, 1<<24));

// Recréez la fonction Array.prototype.reduce() avec la signature suivante => 'myReduce(arr, func, initialValue)' elle doit donc prendre un array, une fonction et la valeur initiale en paramètre

// Initialiser l'accumulateur avec 0 ou initialValue
// Boucler sur l'array passé en argument à myReduce
// Appeller func avec comme paramètre l'élement courant et l'accumulateur
// Return l'accumulateur après la fin de la boucle

// map classé par ordre alphabétique  set par insertion get