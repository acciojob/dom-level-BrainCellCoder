//your JS code here. If required.
// Function to calculate the DOM level of an element with the given id
function calculateDomLevel(elementId) {
    let element = document.getElementById(elementId);
    let level = 0;

    // Traverse up the DOM tree until reaching the root html element
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the result using alert
    alert(`The level of the element is: ${level}`);
}

// Call the function with the id 'level'
calculateDomLevel('level');
