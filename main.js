const myForm = document.querySelector('#my-form');
const expenseAmount = document.querySelector('#number');
const description = document.querySelector('#description');
const category = document.querySelector("#category");
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
// for remove the li item
userList.addEventListener('click',removeList);
// for edit the items
userList.addEventListener('click',editList);

let id = 1
function onSubmit(e) {
  e.preventDefault();
  
  if(expenseAmount.value === '' || description.value === '' || category.value==='' ) {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    let userDetails = {"expenseAmount":expenseAmount.value,
                        "description":description.value,
                        "category":category.value

                      }
                                    
    localStorage.setItem(category.value,JSON.stringify(userDetails));
    // localStorage.setItem("email",emailInput.value);
    id+=1
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${expenseAmount.value}   ${description.value} ${category.value}`));
    const input = document.createElement('input');
    input.type = "button";
    input.value = "Delete";
    input.className ="delete btn btn-primary"
    li.appendChild(input)

    const edit = document.createElement('input');
    edit.type = "button";
    edit.value = "Edit";
    edit.className ="edit btn btn-primary"
    li.appendChild(edit)

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    expenseAmount.value = '';
    description.value = '';

  }
}
function removeList(e){
  if(e.target.classList.contains('delete')){
    const li = e.target.parentElement;
    const text = li.textContent;
    const arr = text.split(" ");
    userList.removeChild(li);
    localStorage.removeItem(arr[arr.length - 1])
  }
}

function editList(e){
  if(e.target.classList.contains('edit')){
    const li = e.target.parentElement;
    const text = li.textContent;
    console.log(text);
    const arr = text.split(" ");
    const user = JSON.parse(localStorage.getItem(arr[arr.length - 1]));
    console.log(user);
    expenseAmount.value = user.expenseAmount;
    description.value = user.description;
    category.value = user.category;
    userList.removeChild(li);
    localStorage.removeItem(arr[arr.length - 1])

  }
}
