class User {
    constructor(firstName, lastName, elevation) {
        // ajoute propriété de la classe 
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = elevation
    }

    sayName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get role() {
        return this.elevation;
    }

    set role(value) {
        return this.elevation = value
    }
}

class Contributor extends User {
    constructor(firstName, lastName, elevation, postNumber) {
        super(firstName, lastName, elevation);
        this.postNumber = postNumber
    }

    //surcharger 
    sayNameAndPostsCount() {
        return super.sayName() + " has written " + this.postNumber
    }
}

const marina = new Contributor("Marina", "Satsyk", "user", 42); 


const julien = new User("Julien", "Doe", "admin"); 

console.log(marina.sayNameAndPostsCount); // Marina Satsy has written 42 pots

marina.role = "contributor";
console.log(marina.role);
console.log(julien.role);

// console.log(user.sayName()); // Marina Satsyk

// vieille méthode
// function User(firstName, lastName) {
//     if(!(this instanceof User)) {
//         throw new TypeError("you must use 'new' keword to instanciate this class);
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// User.prototype.sayName = function() {
//     return this.firstName + " " + this.lastName;
// }

// const user2 = new User("Edouard", "Ninja-poney");

// console.log(user2.sayName());