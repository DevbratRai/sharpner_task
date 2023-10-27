const myForm = document.querySelector("#my-form");
const price = document.querySelector("#number");
const dish = document.querySelector("#dish");
const category = document.querySelector("#category");
const userListTable1 = document.querySelector("#user-list-table1");
const userListTable2 = document.querySelector("#user-list-table2");
const userListTable3 = document.querySelector("#user-list-table3");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  obj = {
    price: price.value,
    dish: dish.value,
    category: category.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/30ac03cddc464a258e74877f7a742c88/userInfo",
      obj
    )
    .then((res) => showNewUserOnScreen(res.data))
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", async () => {
  const userData = await axios.get(
    "https://crudcrud.com/api/30ac03cddc464a258e74877f7a742c88/userInfo"
  );

  const data = userData.data;
  for (let i = 0; i < data.length; i++) {
    showNewUserOnScreen(data[i]);
  }
});

function showNewUserOnScreen(res) {
  //   console.log(res.price);

  childHtml = `<li id=${res._id}>${res.price} - ${res.dish} - ${res.category}
  <button onclick=deleteUser('${res._id}','${res.category}')> Delete</button>  
  </li>`;

  if (res.category === "Table1") {
    userListTable1.innerHTML += childHtml;
  } else if (res.category === "Table2") {
    userListTable2.innerHTML += childHtml;
  } else {
    userListTable3.innerHTML += childHtml;
  }
}

function deleteUser(userId, categ) {
  axios
    .delete(
      `https://crudcrud.com/api/30ac03cddc464a258e74877f7a742c88/userInfo/${userId}`
    )
    .then((res) => removeUserFromTheScreen(userId, categ))
    .catch((error) => console.log(error));
}

function removeUserFromTheScreen(userId, categ) {
  //   console.log(res);
  const childNodeToBeDeleted = document.getElementById(userId);
  if (childNodeToBeDeleted) {
    if (categ === "Table1") {
      userListTable1.removeChild(childNodeToBeDeleted);
    } else if (categ === "Table2") {
      userListTable2.removeChild(childNodeToBeDeleted);
    } else {
      userListTable3.removeChild(childNodeToBeDeleted);
    }
  }
}
