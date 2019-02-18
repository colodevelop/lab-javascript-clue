// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

function Person(firstName, lastName, age, occupation, description) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.occupation = occupation;
  this.description = description;
}

const mrGreen = new Person(
  "Jacob",
  "Green",
  45,
  "Entrepreneur",
  "He has a lot of connections"
);

const mrOrchid = new Person(
  "Doctor",
  "Orchid",
  26,
  "Scientist",
  "PhD in plant toxicology. Adopted daugher of Mr.Boddy"
);

const mrPlum = new Person(
  "Victor",
  "Plum",
  22,
  "Designer",
  "Billionaire video game designer"
);

const msScarlet = new Person(
  "Kasandra",
  "Scarlet",
  31,
  "Actor",
  "She is an A-list movie star with a dark past"
);

function weapon(weapon, weight) {
  this.weapon = weapon;
  this.weight = weight;
}

const rope = new weapon("rope", 10);
const knife = new weapon("knife", 8);
const candlestick = new weapon("candlestick", 2);
const dumbell = new weapon("dumbell", 30);
const poison = new weapon("poison", 2);
const axe = new weapon("axe", 15);

function Room(room) {
  this.room = room;
}

const dinning = new Room("Dinning room");
const conservatory = new Room("Conservatory");
const kitchen = new Room("Kitchen");
const study = new Room("Study");
const library = new Room("Library");
const billiard = new Room("Billiard Room");
const lounge = new Room("lounge");

// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen, mrOrchid, mrPlum, msScarlet);

// Rooms' Collection
var roomsArray = [];

roomsArray.push(
  dinning,
  conservatory,
  kitchen,
  study,
  library,
  billiard,
  lounge
);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbell, poison, axe);

const cluedoGame = {
  misteryEnvelope: [],

  randomSelector: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  pickMistery: function(arr, arr2, arr3) {
    var fullName = this.randomSelector(arr);

    var firstName = fullName.firstName;
    var lastName = fullName.lastName;
    var weapon = this.randomSelector(arr2).weapon;
    var room = this.randomSelector(arr3).room;

    this.misteryEnvelope.push(firstName, lastName, weapon, room);
    return this.misteryEnvelope;
  },

  revealMistery: function(arr) {
    this.pickMistery(charactersArray, weaponsArray, roomsArray);
    return `${arr[0]} ${arr[1]} killed Mr.Boddy using the ${arr[2]} in the ${
      arr[3]
    }!!!`;
  }
};

console.log(cluedoGame.revealMistery(cluedoGame.misteryEnvelope));
