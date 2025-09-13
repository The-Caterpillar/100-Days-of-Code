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