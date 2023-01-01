// class Creature:
    // name, age, strength
    // saySomething(words)
    // identity

        // class Orc
            // super
            // scream(words)
            // bite(someone)

            // class Urukhai
                // name, strength +10
                // kill(someone)

            // class ChiefOrc
                // name, age, strength +2, isChief
                //giveOrder(someone)

class Creature {
    constructor(name, strength, age = null){
    this.name = name;
    this.age = age
    this.strength = strength;
    }
    // on ne met pas de code pour le moment 

    checkIfIsInstanceOfCreatureAndThrow(someone) {
        // console.log(someone instanceof Creature)
        if(!(someone instanceof Creature) ) {
            throw new Error(`${someone} n'est pas une instance de créature`)
        }
    }

    saySomething(words) {
        return `${this.name}: ${words}`
    }

    identity() {
        console.log(`${this.name} (${this.strength} STR)/ ${this.age} years old`)
    }
}

class Orc extends Creature {
    constructor(name, strength, age) {
        super(name, strength, age)
    }

    scream(words) {
        // return `${this.name}: ${words.toUpperCase()}`;
        // console.log(super.saySomething(words).split(":")) // ubdefined // j'ai un tableau 
        const [name, sentence]  = super.saySomething(words).split(":");
        return `${name}: ${sentence.toUpperCase()}`
    }

    bite(someone) {
        super.checkIfIsInstanceOfCreatureAndThrow(someone);
        // console.log(`${this.name} mord ${someone.name}`)
    }
}

class Urukhai extends Orc {
    constructor(name, strength) {
        super(name, strength + 10)
    }

    kill(someone) {
        super.checkIfIsInstanceOfCreatureAndThrow(someone)
        console.log(`${this.name} tue ${someone.name}`)
        // someone = undefined
    }

    identity() {
        return `${this.name} (${this.strength} STR). Has no age)`
    }
}

class ChiefOrc extends Orc {
    // obligé de mettre un undefined à la fin  exemple weapon = "sword"
    constructor (name, strength, age) {
        super(name, strength, age);
        this.isChief = true; // mettre une valeur arbitraire le naming un variable avec is c'est un booléen. On ne met pas dans le constructor car on sait que c'est un chef
    }

    identity() {
        return super.identity() + "And I am the boss !"
        // console.log("And I am the boss ! ")
    }

    giveOrder(someone, order) {
        super.checkIfIsInstanceOfCreatureAndThrow(someone);
        return this.scream(`${order} ${someone.name}`);
    }
}

let character1 = new Creature("VaultBoy", 2, 25);

character1.identity();
// character1.saySomething("Bonjour")

let Dobby = new Creature("Dobby", 2, 326)

let Toto = new Orc("Toto", 200, 120);
console.log(Toto.scream("yololo"))

Toto.bite(Dobby);

let Aasimar = new Urukhai("Aasimar", 250);

Aasimar.kill(Toto);

Toto.identity();

let Goliath = new ChiefOrc("Goliath", 500, 250);

console.log(Goliath.giveOrder(Toto, "Va passer le balai"));
console.log(Goliath.identity());