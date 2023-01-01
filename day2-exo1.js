// Écrivez une classe nommée "Calculette" qui accepte 2 arguments lors de l'instanciation : nombre1 et nombre2 et qui les renseignent en tant que propriété.

// La classe devra également être composée de ces 5 méthodes (qui n'auront pas d'arguments) :

// - add
// - substract
// - times
// - divide
// - modulo

class Calculette {
    constructor(nombre1, nombre2) {
        this.nombre1 = this.checkIsNaNState(nombre1);
        this.nombre2 = this.checkIsNaNState(nombre2);
    }

    checkIsNaNState(value) {
        const type = typeof value;
        value = +value;
        if(isNaN(value)) throw new TypeError(`${type}This value is not a number`)

        return value;
    }

    add() {
        return +(this.nombre1 + this.nombre2).toFixed(2);
    }

    substract() {
        return +(this.nombre1 - this.nombre2).toFixed(2);;
    }

    multiply() {
        return +(this.nombre1 * this.nombre2).toFixed(2);;
    }

    divide() {
        if(isFinite(this.nombre1 / this.nombre2)) {
            return +(this.nombre1 / this.nombre2).toFixed(2);
        }
        // Lever des erreurs, des exceptions
        throw new Error("Division par zéro impossible")
    }
    // le reste de la division quotidienne
    modulo() {
        if(isFinite(this.nombre1 / this.nombre2)) {
            return this.nombre1 % this.nombre2 
        }

        throw new Error("Division par zéro impossible")
    }

}
let calc = new Calculette("7", 2);
// let calc2 = new Calculette(7, 2 );
console.log(calc.add());
console.log(calc.substract());
console.log(calc.multiply());
console.log(calc.divide());
console.log(calc.modulo());
// calc.times();
// calc.divide();
// calc.modulo();


