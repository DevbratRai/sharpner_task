const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const obj = {
    name: nameInput.value,
    phonenumber: phone.value,
    email: emailInput.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/2e2d2a5ac1654931b2223f7f4213a31a/userInfo",
      obj
    )
    .then((res) => showNewUserOnScreen(res))
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", async () => {
  const userData = await axios.get(
    "https://crudcrud.com/api/2e2d2a5ac1654931b2223f7f4213a31a/userInfo"
  );

  const data = userData.data;
  for (let i = 0; i < data.length; i++) {
    showNewUserOnScreen(data[i]);
  }
});

function showNewUserOnScreen(user) {
  const childHtml = `<li id=${user._id}>${user.name} - ${user.email}
                    <button onclick=deleteUser('${user._id}')> Delete</button> 
                    <button onclick=editUser('${user._id}','${user.name}','${user.email}',${user.phonenumber})> Edit</button> 
                    </li>`;
  userList.innerHTML += childHtml;
}

function deleteUser(userId) {
  axios
    .delete(
      `https://crudcrud.com/api/2e2d2a5ac1654931b2223f7f4213a31a/userInfo/${userId}`
    )
    .then((res) => {
      removeUserFromScreen(userId);
    })
    .catch((error) => console.log(error));
}

function removeUserFromScreen(userId) {
  const childNodeToBeDeleted = document.getElementById(userId);
  if (childNodeToBeDeleted) {
    userList.removeChild(childNodeToBeDeleted);
  }
}

function editUser(userId, name, email, phone) {
  console.log(userId, name, email, phone);
  deleteUser(userId);
  nameInput.value = name;
  emailInput.value = email;
  phone.value = phone;
}
