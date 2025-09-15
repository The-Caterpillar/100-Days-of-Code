// Example 6:
document.getElementById('HoverMeBtn').addEventListener('mouseover', function(){
    alert("Hello there!!");
})


// Example 7:
document.querySelectorAll('.tea-item').forEach(function(item){
    item.addEventListener('dblclick', function(){
        this.style.backgroundColor = "lightgreen";
})
});


// Example 8:
document.getElementById('feedbackForm').addEventListener('submit', function(event){
    event.preventDefault();
    let fInput = document.getElementById('feedbackInput').value;
    alert("Form Submitted Successfully!!");
    document.getElementById('feedbackDisplay').innerText = "You Posted: \n" + fInput;
    // Adding styling to the displayed feedback
    document.getElementById('feedbackDisplay').style.border = "2px solid green";
    document.getElementById('feedbackDisplay').style.padding = "10px";
    document.getElementById('feedbackDisplay').style.marginTop = "10px";
    document.getElementById('feedbackForm').reset();
});

// Example 9:
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM is fully loaded and parsed";
});

// Example 10:
document.getElementById('toggleHighlight').addEventListener('click', function() {
    let descriptionText = document.getElementById('descriptionText');
    descriptionText.classList.toggle('highlight');

    // Let's also change the button text based on the state
    if (descriptionText.classList.contains('highlight')) {
        this.textContent = "Remove Highlight!";
    } else {
        this.textContent = "Add Highlight!";
    }
});
