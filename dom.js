const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    // get input value
    const newItem = document.getElementById('item').value;
    const desItem = document.getElementById('description').value;


    // create new li element
    const li = document.createElement('li');
    // add class
    li.className = "list-group-item";
      
    // Add text node with input value
    li.appendChild(document.createTextNode(`${newItem} ${desItem}`));
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
//filter Item
function filterItems(e){
    // convert text to lower case
    const text = e.target.value.toLowerCase();
    // get list
    const items = itemList.getElementsByTagName('li');
    
    // conver to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        console.log(itemName.toLowerCase().indexOf(text));
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = "block";
        }else{
            item.style.display = "none";

        }
    })

}