function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}
const Sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// console.log(Sonny)
const Jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
// console.log(Jordan)
Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};
// Sonny.greet(Jordan);
// Jordan.greet(Sonny);
// console.log(`${Sonny.name}'s contact info is ${Sonny.email}, ${Sonny.phone}`);
// console.log(`${Jordan.name}'s contact info is ${Jordan.email}, ${Jordan.phone}`);

class Card {
    constructor(point,suit){
        this.point = point;
        this.suit = suit;
    }
}

const myCard = new Card(7, 'hearts');
console.log(myCard);

Card.prototype.getImageUrl = function(){
    console.log(`images/${this.point}_of_${this.suit}.png`)
}
myCard.getImageUrl();

