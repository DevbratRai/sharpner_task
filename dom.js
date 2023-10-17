const form = document.getElementById("addForm");
const itemList = document.getElementById("items");

form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    console.log(e);

    // get input value
    const newItem = document.getElementById('item').value;

    // create new li element
    const li = document.createElement('li');
    // add class
    li.className = "list-group-item";
      
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // create delete button element
    const editButton = document.createElement('button');
    const deleteBtn = document.createElement('button');
    // add classes to del button
    editButton.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    editButton.appendChild(document.createTextNode('Edit'));
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(editButton)
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}