document.title = "Changed Title";
// document.all[10].textContent = "Hello";
const header = document.getElementById("main-header");

header.style.borderBottom = "solid 3px #000" 

const addItem = document.getElementsByClassName("title");
console.log(addItem);
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";

const items = document.getElementsByClassName("list-group-item");
items[2].style.background = "green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
}
