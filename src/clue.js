// ITERATION 1
/*
Array 'suspectsArray'
should be an array
should have 6 suspects (objects)
t"
Array 'roomsArray'
should be an array
should have 15 rooms (objects)
- Room Objects
should have a string in property "name"
*/

// Suspects Array

const suspectsArray = [
    {
        firstName: "ExampleFirstName1",
        lastName: "ExampleLastName1",
        occupation: "ExampleOccupation1",
        age: 30,
        description: "ExampleDescription1",
        image: "ExampleImageURL1",
        color: "ExampleColor1"
      },
      {
        firstName: "John",
        lastName: "Doe",
        occupation: "Gardener",
        age: 45,
        description: "Tall and lean with a quiet demeanor",
        image: "url_to_john_doe_image",
        color: "green"
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        occupation: "Chef",
        age: 34,
        description: "Energetic and creative with a love for spices",
        image: "url_to_jane_smith_image",
        color: "red"
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        occupation: "Librarian",
        age: 41,
        description: "Bookish and intelligent, often found with a novel",
        image: "url_to_alice_johnson_image",
        color: "blue"
      },
      {
        firstName: "Bob",
        lastName: "Brown",
        occupation: "Artist",
        age: 28,
        description: "Free-spirited and colorful with an eye for detail",
        image: "url_to_bob_brown_image",
        color: "yellow"
      },
      {
        firstName: "Clara",
        lastName: "Adams",
        occupation: "Doctor",
        age: 39,
        description: "Calm and composed with a reassuring presence",
        image: "url_to_clara_adams_image",
        color: "white"
      }
];

// Rooms Array

const roomsArray = [
    { name: "Kitchen" },
    { name: "Ballroom" },
    { name: "Conservatory" },
    { name: "Dining Room" },
    { name: "Billiard Room" },
    { name: "Library" },
    { name: "Lounge" },
    { name: "Hall" },
    { name: "Study" },
    { name: "Garden" },
    { name: "Drawing Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest Room" },
    { name: "visualViewport"}

];

// Weapons Array

const weaponsArray = [

    {
        name: "Knife",
        weight: 300
      },
      {
        name: "Candlestick",
        weight: 2000
      },
      {
        name: "Pistol",
        weight: 900
      },
      {
        name: "Rope",
        weight: 500
      },
      {
        name: "Lead Pipe",
        weight: 2500
      },
      {
        name: "Wrench",
        weight: 1000
      },
      {
        name: "Poison",
        weight: 100
      },
      {
        name: "Bat",
        weight: 1200
      },
      {
        name: "Trophy",
        weight: 1500
      }
];

/*
Function "selectRandom" - Find a random element of the array

should return a random element of the array

should be declared
should return an object
should return an object with 3 properties: `suspect`, `weapon`, `room`
should return a suspect in the suspect property of the object
should return a weapon in the weapon property of the object
should return a room in the room property of the object

Function "revealMystery" - Reveal the mystery
should define revealMystery
should return a string
should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"*/

// ITERATION 2

function selectRandom(array) {
    if(array.length==0){
        return undefined;
    }

    let index = 0;
    index = Math.floor(Math.random() * (array.length -1));
    return array[index];
}

function pickMystery() {
    return{
        suspect: selectRandom(suspectsArray),
        weapon:  selectRandom(weaponsArray),
        room:    selectRandom(roomsArray),
    }
}


// ITERATION 3

function revealMystery() {
    return `${suspectsArray.firstName} + ' ' + ${suspectsArray.lastName } + 'killed Mr. Boddy using the' + ' ' +${weaponsArray.name} +' in the' +${roomsArray.name}`;
}

