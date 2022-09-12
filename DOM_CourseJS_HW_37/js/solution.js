"use strict";
let itemOutput = () => {
const ul = document.querySelector(".ulClass");
const ulAttributes = ul.attributes;

const arr = [];
const arrName = [];

for ( const attributes of ulAttributes ) {
    arr.push(attributes.value)
    arrName.push(attributes.name)
}

console.log(arr);
console.log(arrName);

document.querySelector("ul li:last-child").innerHTML = "Hello, my name is Oleh";
document.querySelector('ul li:first-child').setAttribute("data-my-name","Oleh");
document.querySelector('ul').removeAttribute('data-dog-tail');
};

itemOutput();