console.log("before");  // code synchrone
// des méthodes qui font du code asynchrone 
// handler c'est une fonction, un code exécuté plus tard c'est de l'asynchrone
/* j'ai un objet et on veut echanger, ce code n'est pas exécuté tout de suite */
// setTimeout(function() { console.log('Timeout!')}, 1000); // Before after Timeout 
setImmediate(function() { console.log('Timeout!')}, 1000); // Before after Timeout  methode asynchrone
// setImmediate(function() { console.log('Timeout'); // Before after Timeout  methode asynchrone

console.log('after')

// pile des evenements asynchro,e