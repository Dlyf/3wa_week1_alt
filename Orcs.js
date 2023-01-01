class Creature {
    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    saySomething(words) {
        return `hello world`;
    }

    identity() {
        console.log(`je m'apelle ${this.name}, j'ai ${this.age} et j'ai ${this.strength}`);
    }
}

class Orc extends Creature {
    constructor(name, age, strength) {
        super(name, age, strength)
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    scream(words) {
        return `${words}.toUpperCase()`;
    }

    bite(someone) {
        return "je mords" + someone;
    }
}

class Urukhai extends Orc {
    constructor(name, strength) {
        super(name, strength+10)
        this.name = name;
        this.strength = strength;
    }

    kill(someone) {
        return "je kill" + someone;
    }
}

class ChiefOrc extends Orc {
    constructor(name, age, strength, isChief) {
        super(name, age, strength)
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.isChief = isChief;
    }

    giveOrder(someone) {
        return this.scream(`${order} ${someone.name}`);
    }
}

const shrek = new Creature("shrek", 22, 100);
console.log(shrek.saySomething());
console.log(shrek.identity());
const gobelins = new Orc("Gobelins", 80, 200)
console.log(gobelins.saySomething())
console.log(gobelins.identity())
console.log(gobelins.scream("à l'attaque"));
console.log(gobelins.bite(""));
const urukhai = new Urukhai("Sauron",200)
console.log(urukhai.saySomething())
console.log(urukhai.identity())
console.log(urukhai.scream())
console.log(urukhai.bite())
console.log(urukhai.kill())
const chiefOrc = new ChiefOrc("Azert", 100, 500, "cool");
console.log(urukhai.saySomething())
console.log(urukhai.identity())
console.log(urukhai.scream())
console.log(urukhai.bite())
console.log(urukhai.giveOrder())