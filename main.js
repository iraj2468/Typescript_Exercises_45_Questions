"use strict";
// question no 01
console.log("hellow world");
// question no 02
let personName = "ERIC";
console.log(`Hellow ${personName} would you to learn to learn some python today?`);
// question no 03
// lowercase
let personName1 = "Iraj";
console.log("lowercase:", personName1.toLocaleLowerCase());
// uppercase
console.log("uppercase:", personName1.toLocaleUpperCase());
// titlecase
console.log("titlecase:", personName1.replace(/\bw/g, c => c.toUpperCase()));
// question no 04
let quote = "A person who never made a mistake never tried anything new";
let author = "Albert Einstein";
console.log(`${author} once said,"${quote}"`);
// question no 05
let quote2 = "A person who never made a mistake never tried anything new";
let famouse_person = "Albert Einstein";
let message = `${famouse_person} once said, "${quote2}"`;
console.log(message);
// question no 06
let person_Name = "\n\t Iraj \t\n";
console.log(person_Name);
let stripped = person_Name.trim();
console.log(stripped);
// question no 07 + 08
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// question no 09
let favouriteNumber = 7;
console.log(`My favourite number is ${favouriteNumber}`);
// question no 10
// my name is iraj
// Dated: 8/05/2024
console.log(`hellow world simple program`);
// question no 11
let members = ["Malaika", "Laiba", "Amna", "Abeer", "Fatima"];
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
// question no 12
let members1 = ["Malaika", "Laiba", "Amna", "Abeer", "Fatima"];
let message1 = "hellow kiya horha he?";
for (let i = 0; i < members1.length; i++) {
    console.log(message1 + members[i]);
}
// question no 13
let transportation = ["CIvic", "Bike", "Car", "Bus", "truck"];
for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own a: " + transportation[i]);
}
// question no 14
let guest_list = ["Ali", "Frhan", "Raza", "Ayesha"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear friends: " + guest_list[i] + `\n we invited to you on a dinner tommorow`);
}
// questio no 15
let guests = ["Ali", "Fatima", "Rohail", "Kiswah"];
console.log(`Due to some reason !${guests[1]} will not come on my dinner`);
guests[1] = "Hubaba";
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]} I would like to invited youfor dinner on tommorow`);
}
// question no 16
let guests1 = ["Ali", "Fatima", "Rohail", "Kiswah"];
console.log(`Due to some reason !${guests1[1]} will not come on my dinner\n`);
guests1[1] = "Hubaba";
for (let i = 0; i < guests1.length; i++) {
}
console.log(`Good News! we have arranges a big dinner table so we invited 3 more guests\n thank you`);
guests1.unshift("Arsalan");
guests1.splice(2, 0, "Alina");
guests1.push("Sana");
for (let i = 0; i < guests1.length; i++) {
    console.log(`Dear ${guests1[i]}, you are invited for dinner`);
}
// question no 17
let guest2 = ["Ali", "Fatima", "Rohail", "Kiswah"];
guest2[1] = "hubaba";
for (let i = 0; i < guest2.length; i++) {
}
guests1.unshift("Arsalan");
guests1.splice(2, 0, "Alina");
guests1.push("Sana");
for (let i = 0; i < guests1.length; i++) { }
console.log("\nSoory we cant arranged big table, only two person will be invited\n");
while (guest2.length) {
    let removeguests = guest2.pop();
    console.log(`Sorry! ${removeguests}, you are not invited for dinner\n`);
}
for (let i = 0; i < guest2.length; i++) {
    console.log(`Dear ${guest2[i]}, you are still invited for dinner\n`);
}
guest2.splice(0, 2);
console.log(guest2);
// question no 18
let countries = ["Pakistan", "China", "America", "canada", "Sirilanka", "Bangladesh"];
let originalOrder = countries.slice();
console.log("Original Order", [originalOrder]);
console.log(`Alphabetical Order  ${countries.sort()}`);
console.log("Original Order", [originalOrder]);
console.log(`Reverse Alphabetical Order[${countries.reverse()}]`);
console.log(`Origina Order`, [originalOrder]);
console.log(`Reverse Alpabetical Order[${countries.reverse().reverse()}]`);
console.log(`Reverse Alphabetical Order[${countries.reverse().sort()}]`);
// question 19
console.log(`Total number of guest: ${guest2.length}\n`);
// question no 20
let languages = ["Urdu", "English", "Punjabi", "Pushto", "Sindhi"];
languages.forEach((list) => {
    console.log(list);
});
// question no 21
let object = {
    name: "laptop",
    Gneration: 8,
    speed: "fast",
    colour: "black",
    price: 450000,
    INstock: true
};
console.log(object);
// question no 22
let array = [`Iraj`, `Malaika`, 1, 2, 4];
console.log(array[8]); // error(undifined)
// question no 23
// Equality comparison (true)
let car = `Iraj`;
console.log("Is car == `Iraj`? I predict true");
console.log(car == `Iraj`);
let toys = `Rohan`;
console.log("Is toys == `Rohan`? I predict true");
console.log(toys == `Rohan`);
let glasses = `mama`;
console.log("Is glasses === `mama`? I predict true");
console.log(glasses == `mama`);
let houses = `Rashid Ahmed`;
console.log("Is houses == `Rashid Ahmed`? I preict true");
console.log(houses == `Rashid Ahmed`);
let bottles = `shopkeeper`;
console.log("Is bottles == `shopkeeper`? I predict true");
console.log(bottles == `shopkeeper`);
// Not Equality Coparisons (false)
let car2 = `Iraj`;
console.log("Is car != `girl`? I predict false");
console.log(car2 == `girl`);
let toys2 = `Rohan`;
console.log("Is toys != `sami`? I predict false");
console.log(toys2 == `sami`);
let glasses2 = `mama`;
console.log("Is glasses != `faizan`? I predict false");
console.log(glasses2 == `faizan`);
let houses2 = `Rashid Ahmed`;
console.log("Is houses != `Rashid Ahmed`? I prdict false");
console.log(houses2 == `Rashid Ahmed `);
let bottles2 = `shopkeeper`;
console.log("Is bottles != `saler`? I predict false");
console.log(bottles2 == `saler`);
// question no 24
let num1 = 78;
console.log(num1 > 60);
console.log(num1 < 70);
console.log(num1 === 78);
console.log(num1 !== 78);
console.log(num1 >= 60);
console.log(num1 <= 70);
let weather = "Rainy";
console.log(weather === "Rainy" && weather !== "Rainy");
console.log(weather === "Cloudy" || weather !== "Cloudy");
let personNames = "Iraj";
console.log(personNames == "iraj");
console.log(personNames == "Iraj");
let myarray = [1, 2, 3,];
myarray.map((itmz => {
    console.log(itmz == 3);
}));
let myarrays = [1, 2, 3, 4, 5];
myarrays.map((itmzs => {
    console.log(itmzs == 6);
}));
let number = 85;
console.log(number === 85); //number or string will not equal
// question no 25
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}
else { }
// question no 26
let alien_color2 = "green";
alien_color2 = "black";
if (alien_color2 === "green") {
    console.log("The player just earned 5 points");
}
else {
    console.log("The palyer just earned 10 points");
}
// question no 27
let alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("The player earned 5 points");
}
alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log("The player just earned 5 points");
}
else {
    console.log("The player just earned 10 points");
}
alien_color3 = "red";
if (alien_color3 === "yellow") {
    console.log("The player just earned 10 points");
}
else {
    console.log("The player just earned 15 points");
}
// question no 28
let age = 15;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 4 && age < 4) {
    console.log("The person is a toodler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age > 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age > 20 && age < 65) {
    console.log("The person is a adult");
}
else if (age < 65) {
    console.log("The person is an elder.");
}
else {
    console.log("Person is an elder");
}
//  question no 29
let favourite_fruits = ["Apple", "Mango", "Orange"];
if (favourite_fruits.includes(`Apple`)) {
    console.log(`I really like apple`);
}
if (favourite_fruits.includes(`Mango`)) {
    console.log(`I really like Mango `);
}
if (favourite_fruits.includes(`Orange`)) {
    console.log(`I really like Orange `);
}
if (favourite_fruits.includes(`grapes`)) {
    console.log(`I really like grapes `);
}
// question no 30
let users = ["Malika", "Iraj", , "Jawaid", "Romail", "Admin"];
for (let user of users) {
    if (user === "Admin")
        console.log("Hellow admin, would you like to see a status report?");
    else {
        console.log(`Hellow ! ${user},Thank u for logign in again`);
    }
}
// question no 31
let users1 = ["Malika", "Iraj", , "Jawaid", "Romail", "Admin"];
if (users1.length === 0) {
    console.log("we need to find some users!");
}
else {
    users1 = [];
    console.log("All users have been removed:" + users1.length);
}
// qusetion no 32
let current_users = ["ayyan", "saba", "rida", "malaiak", "fahad", "admin"];
let new_users = ["subhan", "fariha", "Admin", "rohail"];
new_users.forEach((newuser) => {
    if (current_users.some((currentusers) => currentusers.toLocaleLowerCase() === newuser.toLocaleLowerCase())) {
        console.log(`${newuser} will need to enter a new username`);
    }
    else {
        console.log(`${newuser} is available`);
    }
});
// question no 33
let originalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
;
for (let i = 0; i < originalNum.length; i++) {
    if (originalNum[i] == 1) {
        console.log(`${originalNum[i]}st`);
    }
    else if (originalNum[i] == 2) {
        console.log(`${originalNum[i]}nd`);
    }
    else if (originalNum[i] == 3) {
        console.log(`${originalNum[i]}rd`);
    }
    else if (originalNum[i] >= 4 && originalNum[i] <= 9) {
        console.log(`${originalNum[i]}th`);
    }
}
// question no 34
let mypizza = ["Cheez pizza", "Peproni pizza", "Vegetable pizza"];
for (let i = 0; i < mypizza.length; i++) {
    console.log(`${mypizza[i]}`);
}
for (let i = 0; i < mypizza.length; i++) {
    console.log(`${mypizza[i]}`);
    console.log(`I like to eat ${mypizza[i]}`);
}
console.log(`I like to eat pizza.\nPizza comes in a veriety of flavour end tooping.\n I really like to eat pizza`);
// question no 35
let myanimal = ["Dog", "Cat", "Cow", "Sheep"];
for (let i = 0; i < myanimal.length; i++) {
    console.log(`${myanimal[i]}`);
}
for (let i of myanimal) {
    console.log(`${i} would make a great pet`);
}
console.log("These animals would make a great pets.");
// question no 36
function make_shirt(size, label) {
    return `My shirt size is ${size} and my label is :${label}`;
}
let myfunction = make_shirt(34, "The rainy day");
console.log(myfunction);
// question no 37
function make_shirt2(label, size = "large") {
    return `${label} ${size}`;
}
let f1 = make_shirt2("I love typescript");
console.log(f1);
function make_shirt3(label, size = "Medium") {
    return `${label} ${size}`;
}
let f2 = make_shirt3("I love Typescript");
console.log(f2);
function make_shirt4(label, size) {
    return `${label} ${size}`;
}
let f4 = make_shirt4("I love Typescript", "Any size");
console.log(f4);
// question no 38
function cities(nameofcity, nameofcountry = "pakistan") {
    return `${nameofcity}${nameofcountry}`;
}
let city1 = cities("karachi");
let city2 = cities("Islamabaad");
let city3 = cities("lahore");
let city4 = cities("dubai", "USA");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
// question no 39
function citycountry(nameofcities, namecountry) {
    return `${nameofcities} ${namecountry}`;
}
let country1 = citycountry("Lahore", "Pakistan");
let country2 = citycountry("Dubai", "USA");
let country3 = citycountry("Colambo", "Sirilanka");
let country4 = citycountry("Dhaka", "Bangladesh");
console.log(country1);
console.log(country2);
console.log(country3);
console.log(country4);
// question no 40
function myalbum(artistname, albumtitle) {
    return `${artistname} ${albumtitle}`;
}
let album1 = myalbum("Iraj", "Dosti");
let album2 = myalbum("Fariha", "Janat ke pate");
let album3 = myalbum("Saad", "Zindagi");
console.log(album1);
console.log(album2);
console.log(album3);
function myalbum2(artistname, albumtitle, numberoftrack) {
    return { artistname, albumtitle, numberoftrack };
}
let albumfirst = myalbum2("Iraj", "Dosti", 33);
let albumsecond = myalbum2("Fariha", "Janat ke pate", 30);
let albumthird = myalbum2("Saad", "Zindagi", 58);
console.log(albumfirst);
console.log(albumsecond);
console.log(albumthird);
// question no 41 
let magiciansName = ["Ali", "Mustafa", "Haider", "Iraj", "Hammad"];
function show_magicians() {
    for (let a of magiciansName) {
        console.log(a);
    }
}
show_magicians();
// question no 42
let magiciansNames = ["Ali", "Mustafa", "Haider", "Iraj", "Hammad"];
function show_magicians1(greet) {
    for (let items of magiciansNames) {
        console.log(greet, items);
    }
}
show_magicians1("Hellow, how are you Mr");
//  question no 43
let magiciansNames2 = ["Ali", "Mustafa", "Haider", "Iraj", "Hammad"];
let magiciansNameCopy = [...magiciansNames2];
function show_magicians2(greet) {
    let withgreeting = " ";
    for (let b of magiciansNames2)
        withgreeting += `${greet} ${b}\n`;
    return withgreeting;
}
let mygreeting = show_magicians2("Hellow");
let myArray = mygreeting.split(`\n`);
console.log(myArray);
console.log(magiciansNames2);
// question no 44
function sandwich(...items) {
    console.log("Sandwich Order");
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]}`);
    }
}
console.log("Enjoy your sandwiches");
sandwich("cpsicum", "tomato", "chicken");
sandwich("chicken", "onion", "tomato");
sandwich("chicken", "tomato", "cheese");
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
let mycar = createcar("Toyota", "Corolla", { color: "Black", year: "2024" });
console.log(mycar);
// completed my 45 questions 
