// Exo1
// setTimeout(() => {console.log('TROP TARD !')}, 300);

// Exo2
// var Promise = require('es6-promise').Promise;

// var promise =  new Promise(function (fulfill, reject) {
//     setTimeout(function() {
//         fulfill("ACCOMPLIE !");
//     }, 300);
//   })

//   promise.then(function() {
//     console.log('ACCOMPLIE !');
//     console.log(fulfill(setTimeout));
//   } );

// Exo 3 
// var promise =  new Promise(function (fulfill, reject) {
//   setTimeout(function() {
//       // fulfill("ACCOMPLIE !");
//       reject(new Error('REJET !'));
//   }, 300);
// })

// function onReject(error) {
//   console.log(error.message);
// }

// promise
//   .then(null, onReject);

// Exo 4
// Primo, créez une promesse à l’aide du constructeur Promise, comme nous
// l’avons déjà fait.
// var promise =  new Promise(function (fulfill, reject) {
//   fulfill("J'AI ETE APPELEE")
//   reject(new Error("JE N'AI PAS ETE APPELEE"));
//   // reject("JE N'AI PAS ETE APPELEE")
// })

// function onRejected(error) {
//   console.log(error.message)
// }

//   promise
//     .then(function() {
//       console.log("J'AI ETE APPELEE");
//     })
//     .then(function() {
//       onRejected;
//     })

//ok
// var promise =  new Promise(function (fulfill, reject) {
  
//       fulfill("J'AI ETE APPELEE");
//       reject(new Error('REJET !'));

// })

// function onRejected(error) {
//   console.log(error.message);
// }

// promise
//   .then((value) => console.log(value), onRejected)

// Exo5
// var promise =  new Promise(function (fulfill, reject) {
  
//       fulfill("PROMISE VALUE");
//       // reject(new Error('REJET !'));

// })

// promise
//   .then(console.log);

// console.log("MAIN PROGRAM");

// EXO6
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('SECRET VALUE');
//   reject(new Error('SECRET VALUE'));
// });

// var promise = Promise.resolve('SECRET VALUE');
// var promise = Promise.reject(new Error('SECRET VALUE'));

// promise.catch(function (err) {
//   console.error('THERE IS AN ERROR!!!');
//   console.error(err.message);
// });

// Exo7
// first().then(second).then(console.log)

// Exo8
function attachTitle(DR) {
  return DR;
}

var promise = new Promise(function (fulfill, reject) {
  fulfill('MANHATTAN');
  // reject(new Error('SECRET VALUE'));
});

promise
  .then(console.log);