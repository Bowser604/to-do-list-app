function newItem() {
  
  // 1. Adding a new item to the list of items 
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
    $('#input').val(""); // Reset input field
  }

  // 2. Crossing out items from the list
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut)

  // 3.(a) Adding a 'delete' button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // 3.(b) Adding class delete(display: none) from the css
  function deleteListItem() {
    li.addClass("delete")
  }

  // 4. Recording the item
  $('#list').sortable();
}

function newItemOnEnter(event) {
  if (event.code == "Enter") {
    event.preventDefault(); // Dont submit form
    newItem();
  }
}

// Attach event listener for Enter key press
$('#input').on("keydown", newItemOnEnter);

 
