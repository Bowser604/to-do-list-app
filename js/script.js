let li = $('<li></li>');
let inputValue = $('#input').val();
  li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}

// Crossing out items
function crossOut() {
	li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
	li.toggleClass("strike");
}); 

// Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//  crossOutButton.on("click", deleteListItem);
//  function deleteListItem(){
// 	li.addClass("delete")
// 	}
  $('#list').sortable();

 
