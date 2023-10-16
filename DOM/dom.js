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

const items = document.querySelectorAll(".list-group-item");
console.log(items);
items[1].style.color = "green";

const odd = document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++){
    odd[i].style.background = "green";
}



