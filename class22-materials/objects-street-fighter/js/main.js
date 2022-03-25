//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFightCharacter(punch, kick, catchphrase, specialMove) {
    this.punch = punch;
    this.kick = kick;
    this.catchphrase = catchphrase;
    this.specialMove = specialMove;
    this.taunt = function() {
        console.log(`You can't handle my ${this.specialMove}`);
    }
    this.winning = function() {
        console.log(`HAHA! ${catchphrase}`);
    }
    this.dash = function() {
        console.log(`Whoooop, missed me!`);
    }
}