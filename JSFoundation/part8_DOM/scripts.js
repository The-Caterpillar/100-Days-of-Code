// alert("Connected")



// Example 1:
document.getElementById('changeTextBtn').addEventListener('click', function() {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The text has been changed!";
});


// Example 2:
document.getElementById('highlightFirstCity').addEventListener('click', function() {
    let cities = document.getElementById('cityList');
    cities.firstElementChild.classList.add('highlight');
})


// Example 3:
document.getElementById('changeOrderBtn').addEventListener('click', function() {
    let order = document.getElementById('coffeeType');
    order.textContent = 'Espresso';
    order.style.color = 'blue';
    order.style.backgroundColor = 'white';
});


// Example 4:
document.getElementById("AddNewItem").addEventListener('click',function(){
    // Create a new list item
    let newItem = document.createElement('li');
    newItem.textContent = "Broccoli";
    document.getElementById("shoppingList").appendChild(newItem);
})


// Example 5:
document.querySelectorAll('.removeBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        // this.parentElement.remove();
        this.parentElement.style.textDecoration = "line-through";
    })
});