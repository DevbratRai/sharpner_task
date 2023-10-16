document.title = "Changed Title";
// document.all[10].textContent = "Hello";
const header = document.getElementById("main-header");

header.style.borderBottom = "solid 3px #000" 

const addItem = document.getElementsByClassName("title");
console.log(addItem);
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";

// const items = document.getElementsByClassName("list-group-item");
// items[2].style.background = "green";
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
//     items[i].style.background = "gray";
// }

//get element by tag name

const li = document.getElementsByTagName("li");
li[2].style.background = "green";
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight = "bold";
       li[i].style.background = "gray";
}


//querySelector

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.background = "green";

// const thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.visibility = "hidden";


//querySelectorAll

// const items = document.querySelectorAll(".list-group-item");
// console.log(items);
// items[1].style.color = "green";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// for(let i=0;i<odd.length;i++){
//     odd[i].style.background = "green";
// }

//traversing the dom

const itemList = document.querySelector("#items");
//parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.background = "#f4f4f4";

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.background = "#f4f4f4";

//childNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);

//FirstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "hello 1";

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

//createElement

const newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute('title','Hello Div');

//create text node
const newDivText = document.createTextNode("Hello world");
newDiv.appendChild(newDivText);
console.log(newDiv);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv,h1);






