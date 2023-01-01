// Exo1
// setTimeout(() => {console.log('TROP TARD !')}, 300);

// Exo2
// var Promise = require('es6-promise').Promise;

// var promise = new Promise(function (fulfill, reject) {
//   // Your solution here
//   setTimeout(() => {
//     fulfill('FULFILLED!')
//   }, 300)
// });
//  // Your solution here

//  promise.then(console.log)

// Exo 3

// gestionnaire de resolution, erreur executor c'est une fonction
// var promise = new Promise(function (fulfill, reject) {
//   // Your solution here
//   setTimeout(function() {
//     // fulfill("ACCOMPLIE !");
//     reject(new Error('REJECTED!'))
//   }, 300);
// });

// function onReject (error) {
//   // Your solution here
//   console.log(error.message)
// }

// // Your solution here signature de promise qui accepte un gestionnaire de résolution comme première param, et gestionnaire d'echec comme deuxieme param, mettre rien du gestionnaire de success
// promise.then(null, onReject)

// Exo 4
// "The ES2015 spec states that a promise, once fullfilled or rejected, may
// not change states for the rest of its lifetime"
// une fois une promesse complété, elle ne doit pas changé d'état.

// let promise = new Promise((fulfill, reject) => {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'))
// })

// const onRejected = (error) => console.log(error.message);

// promise.then(console.log, onRejected);
// une promesse c'est toujours asynchrone

// Exo5

// let promise = new Promise((fulfill, reject) => {
//     fulfill('PROMISE VALUE');
//   })

//   promise.then(console.log);

//   console.log("MAIN PROGRAM");

// Exo6
// var promise = Promise.resolve('SECRET VALUE');


//     // Likewise...

//     var promise = new Promise(function (fulfill, reject) {
//       reject(new Error('SECRET VALUE'));
//     });

//     var promise = Promise.reject(new Error('SECRET VALUE'));

//     promise.catch();

// let message = "hello world";

// let promise;

// promise = Promise.resolve(new Error(message));

// promise.catch(console.log)

// EXO 7

// first().then(second).then(console.log)

// first()
//   .then((result) => second(result))
//   .then((data) => console.log(data));
// first().then((result) => second(result).then(console.log))

// EXO 8
// const attachTitle = (value) => `DR. ${value}`

// Promise.resolve('MANHATTAN')
// .then(attachTitle)
// .then(console.log)

// ------------------------------------------------------
// EXO 9

// function parsedPromised(json) {
//   let promise = new Promise((fullfill, reject) => {
//     try {
//       fullfill(JSON.parse(json))
//     } catch(error) {
//       reject(error)
//     }
//   })

//   return promise
// }

// function onReject(error) {
//   console.log(error.message)
// }

// parsedPromised(process.argv[2])
// .then(null, onReject)
// ------------------------------
// EXO 10

// function alwaysThrows() {
//   throw new Error("OH NOES");
// }

// function iterate(num) {
//   console.log(num)
//   // ça se joue sur les valeurs de retour
//   return ++num;
// }

// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .catch(error => console.log(error.message))

// EXO 11

// function all(first, second) {
//   let promise = new Promise((fullfill, reject) => {
//     let counter = 0;
//     let result = [];

//     first.then(value => {
//       result[0] = value
//       counter++;

//       if(counter >= 2) {
//         fullfill(result)
//       }
//     })

//     second.then(value => {
//       result[1] = value
//       counter++;

//       if(counter >= 2) {
//         fullfill(result)
//       }
//     })
//   })

//   return promise
// }

// all(getPromise1(), getPromise2()).then(console.log)

// exo 12

// let url = "http://localhost:1337"
// const Q = require ('q-io/http');

// Q.read(url)
// .then(json => console.log(JSON.parse(json)))

// Exo 13

// const Q = require ('q-io/http');

// Q.read("http://localhost:7000").then(id =>
//  Q.read(`http://localhost:7001/${id}`)
//  )
//  .then(json => console.log(JSON.parse(json)))
//  .catch(console.error)
//  .done()

