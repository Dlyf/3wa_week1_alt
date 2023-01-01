// console.log("HELLO ES6");
// Exo1
// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`);
// let person = "ECMAScript";

// console.log(`Hello, ${person}!
// Your name lowercased is "${person.toLowerCase()}".`);
// function (x) { return x + 1; }
// (x, y) => x + y

// Exo2
// var inputs process.argv.slice(2);
// var result = inputs.map(/* what goes here? */)
//                     .reduce(/* what goes here? */);
// const inputs = process.argv.slice('2');
// const result = inputs.map((x) => x[0])
//                      .join('')
// console.log(`[${inputs}] becomes "${result}"`);

// Exo3

// var that = this;

// () => {
//     this.yelp = "Ouch!";
//     setImmediate(function () {
//         console.log(this.yelp);
//     });
// }

// correction
// let name = process.argv[2];
// console.log(`Hello, ${process.argv[2]}!
//     Your name lowercased is "${process.argv[2].toLowerCase()}".`)

// let [, , ...inputs] = process.argv;
// var inputs = process.argv.slice(2);
// inputs.map(word => word[0]).reduce((prev, current, index, arr)) =>  )
// console.log("[" + inputs.toString() + "] devient " + "\"" + inputs.map(word => word[0]).join('') + "\"");
// console.log("[$inputs.toString() + "] devient " + "\"" + inputs.map(word => word[0]).join('') + "\"");

// map renvoy les mots de chaque mots
// let formattedInputs =inputs.map(word => word[0])
// .reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(`[${inputs}] deient "${formattedInputs}`);

// le mot clé this référence à la  fonction  exo 4
// var foot = {
//     kick: function () {
//         this.yelp = "Aïeuh !";
//         setImmediate( () => {
//             console.log(this.yelp);
//         });
//     }
// };
// foot.kick();

// fction native qui nous permet de donner un context à this
// réécrire sous forme de fonction fléchées

// Exo 5
// ça nous permet d'extraire des variables à partir des objets, tableau de 1000 entrés et récupérer des entrés,
// let userArray = process.argv.slice(2);
// créer un objet vide
// let data = {};
// [1, "jdoe", "jdoe@example.com", "John", "Doe"]
// mettre une virgule directement si on a pas besoin
// [,data.username, data.email] = userArray
// console.log(data);

// rest, spread
// éclater ou regrouper quelque chose

// Exo 6
// let numbers = process.argv.slite(2);

// console.log(`Le minimum de [${numbers}] est ${Math.min(...numbers)}`);

// let numbers = process.argv.slice(2);

// console.log(`Le minimum de [${numbers}] est ${Math.min(...numbers)}`);
// -------------------------------
// js npm et git

// Exo7
// module.exports = function average(...args) {
//     // faire la somme du tableau
//     // diviser cette somme par le nombre d'élément dans le tableau
//     var result = 0;
//         args.forEach(function (value) {
//             result += value;
//         });

//         return result / args.length //(somme d'éléments d'un tableau)
// };

// faire simplement, finir dans le dev et arrivé à faire des choses simples. Les ingénieurs ils sont formaté à faire des trucs compliqués.

//Exo 8
// module.exports = function midpoint(lowEnd = 0, highEnd = 1) {
//     // faire la médiane plus petit /2 
//     return (lowEnd + highEnd) / 2
// };
// faire la médiane plus petit /2 
// module.exports = (lowEnd = 0, highEnd = 1) => (lowEnd + highEnd) / 2

// Exo 9
// des lignes de +, visible, 2% 
// module.exports = (str, exclamation = str.length) => `${str}${"!".repeat(exclamation)}`

// Exo 10
// fn`Bonjour ${you} ! Tu as l’air ${adjective} aujourd’hui !`

// console.log(html`<b>${process.argv[2]} dit</b> : "${process.argv[3]}"`);

//     function html(strings, ...values) {
//         // et que met-on ici ?
//         // N’oubliez pas de renvoyer la `String` échappée !
//         // construire une string
//         // prendre le premier élément de tableau strings
//         // boucler sur values
//         // échapper les caracères et ajouter strings[index + 1] à notre chaîne de caractère
//         // return la chaîne de caractères
//         let result = strings[0];
//         for(var i = 0; i < values.length; i++) {
//             result += escaping(values[i]) + strings[i + 1];
//         }
//         return result;
//     }
//         function escaping(str) {
//             return str
//                 .replace(/</g, "$lt;")
//                 .replace(/>/g, "$gt;")
//                 .replace(/&/g, "$amp;")
//                 .replace(/\'/g, "$apos;")
//                 .replace(/\"/g, "$quot;") + strings[i + 1];
//         }
console.log(html`<b>${process.argv[2]} dit</b> : "${process.argv[3]}"`);


function html(strings, ...values) {
  // construire une string et y ajouter le premier élement du tableau strings
  // boucler sur values
  // echapper les caractères et ajouter strings[index + 1] à notre chaîne de caractères
  // return la chaîne de caractères

  let result = strings[0];
  for (var i = 0; i < values.length; i++) {
    result += escaping(values[i]) + strings[i + 1];
  }

  return result;
}

function escaping(str) {
    return str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/&/g, "&amp;")
      .replace(/\'/g, "&apos;")
      .replace(/\"/g, "&quot;");
}