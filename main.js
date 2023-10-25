// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);
// for remove the li item
// userList.addEventListener("click", removeList);
// for edit the items
// userList.addEventListener("click", editList);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "" || phone.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    let userDetails = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phone.value,
    };

    axios
      .post(
        "https://crudcrud.com/api/a7b6071ccfaf43a18e043c7ae4155690/userInfo",
        userDetails
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    // localStorage.setItem(emailInput.value,JSON.stringify(userDetails));
    // localStorage.setItem("email",emailInput.value);

    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(
        `${nameInput.value}  ${phone.value}  ${emailInput.value}`
      )
    );
    const input = document.createElement("input");
    input.type = "button";
    input.value = "Delete";
    input.className = "delete";
    li.appendChild(input);

    const edit = document.createElement("input");
    edit.type = "button";
    edit.value = "Edit";
    edit.className = "edit";
    li.appendChild(edit);

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
    phone.value = "";
  }
}
// function removeList(e) {
//   if (e.target.classList.contains("delete")) {
//     const li = e.target.parentElement;
//     const text = li.textContent;
//     const arr = text.split(" ");
//     userList.removeChild(li);
//     localStorage.removeItem(arr[arr.length - 1]);
//   }
// }

// function editList(e) {
//   if (e.target.classList.contains("edit")) {
//     const li = e.target.parentElement;
//     const text = li.textContent;
//     const arr = text.split(" ");
//     const user = JSON.parse(localStorage.getItem(arr[arr.length - 1]));
//     nameInput.value = user.name;
//     emailInput.value = user.email;
//     userList.removeChild(li);
//     localStorage.removeItem(arr[arr.length - 1]);
//   }
// }
document.addEventListener("DOMContentLoaded", async () => {
  const userData = await axios.get(
    "https://crudcrud.com/api/a7b6071ccfaf43a18e043c7ae4155690/userInfo"
  );

  const data = userData.data;
  for (let i = 0; i < data.length; i++) {
    userList.innerHTML += `
                        <li>
                        ${data[i].name}  ${data[i].phone} ${data[i].email}
                          <input type="button" value="Delete" class="delete">
                          <input type="button" value="Edit" class="edit">
                        </li>
                           `;
  }
});
