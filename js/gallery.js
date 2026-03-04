/* Function to update the display area */
function upDate(previewPic) {
    // Step 9a: Check if event triggers
    console.log("Event triggered for: " + previewPic.alt);
    
    var displayDiv = document.getElementById('image');
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Function to undo changes when mouse leaves or focus is lost */
function unDo() {
    var displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below or use the Tab key to display here.";
}

/* Step 9: Function for adding the tabfocus attribute */
function addTabIndex() {
    // 9a. Log message to confirm function runs
    console.log("Page loaded. Initializing tabIndex for images...");

    // 9b. Write a for loop to loop through each image
    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        // 9c. Add the tabindex attributes
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image " + (i + 1));
    }
}