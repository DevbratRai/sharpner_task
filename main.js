const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const msg = document.querySelector("#msg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const userList = document.querySelector("#users");


btn.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc";
})
btn.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    document.querySelector("#my-form").style.background = "";
})
myForm.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value===''|| emailInput.value===''){
      msg.innerHTML = "Please enter all fields"
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);

        nameInput.value="";
        emailInput.value = "";
    }
}


