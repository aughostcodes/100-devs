// //Create a class and extend it - Can be anything you would like it to be! 

// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }
//     speak() {
//         console.log(`${this.name} says ${this.sound}!`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//         this.sound = `woof`;
//     }
// }

// class Cat extends Animal {
//     constructor(name, color) {
//         super(name);
//         this.color = color;
//         this.sound = `meow`;
//     }
// }

// class Moogle extends Animal {
//     constructor(name, game) {
//         super(name);
//         this.game = game;
//         this.sound = 'kupo';
//     }
// }

// class Chicken extends Animal {
//     constructor(name, food, type) {
//         super(name);
//         this.food = food;
//         this.sound = `bawk`;
//         this.type = type;
//     }
//     bummer() {
//         console.log(`Aw, ${this.name} is now ${this.type}.`)
//     }
// }

// let honey = new Dog('Honey', 'perfect mutt');
// console.log('honey: ', honey);
// console.log(honey.speak());

// let jonesy = new Cat('Jonesy', 'orange');
// console.log('jonesy: ', jonesy);
// console.log(jonesy.speak());

// let stiltzkin = new Moogle('Stiltzkin', 'Final Fantasy IX');
// console.log('stiltzkin: ', stiltzkin);
// console.log(stiltzkin.speak());

// let tyson = new Chicken('Tyson', 'corn and crickets', 'strips');
// console.log('tyson: ', tyson);
// console.log(tyson.speak());
// console.log(tyson.bummer());
// console.log(tyson.food);


class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    speak() {
        console.log(`${this._name} makes a sound.`);
    }
}

class Turtle extends Animal {
    constructor(name, hatColor) {
        super(name);
        this._hatColor = hatColor;
    }

    get hatColor() {
        return this._hatColor;
    }

    speak() {
        return `${this.name} isn't great at speaking.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    get breed() {
        return this._breed;
    }

    speak() {
        super.speak();
        return `${this.name} barks!`;
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    speak() {
        super.speak();
        return `${this.name} meows!`;
    }
}

const franklin = new Turtle('Franklin', 'red');
console.log('franklin ', franklin);

const kalea = new Dog('Kalea', 'mutt');
console.log('kalea: ', kalea);

const desmond = new Cat ('Desmond', 'tuxedo');
console.log('desmond: ', desmond);

let farm = [franklin, kalea, desmond];
console.log('farm: ', farm);

for (i of farm) {
    console.log(i.speak());
    console.log(Object.entries);
}

// {
//     "_name": "Franklin",
//     "_hatColor": "red"
// }