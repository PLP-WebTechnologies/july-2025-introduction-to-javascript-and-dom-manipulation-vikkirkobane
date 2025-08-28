// Part 1: Variable Declarations and Conditionals

// Declare variables
let userName = prompt("Enter your name:"); // Capture user input
let userAge = prompt("Enter your age:"); // Capture user input

// Check if the user is an adult
if (userAge >= 18) {
    console.log(`Hello ${userName}, you are an adult.`);
} else {
    console.log(`Hello ${userName}, you are a minor.`);
}

// Part 2: Custom Functions

// Function to calculate the total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format a string
function formatString(str) {
    return str.trim().toUpperCase();
}

// Example usage
let totalPrice = calculateTotal(5.99, 3); // Calculate total price
console.log(`Total Price: \(\){totalPrice}`);

let formattedName = formatString(userName); // Format the user's name
console.log(`Formatted Name: ${formattedName}`);

// Part 3: Loop Examples

// Example 1: Using a for loop to iterate through an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits List:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Example 2: Using a while loop to create a countdown
let countdown = 5;
console.log("Countdown:");
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Lift Off!");

// Part 4: DOM Interactions

// Interact with the DOM to change the title text on button click
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("title").textContent = "JavaScript Mastery Achieved!";
});

// Interact with the DOM to add items to the list on button click
document.getElementById("addItemButton").addEventListener("click", function() {
    let newItem = document.createElement("li"); // Create a new list item
    newItem.textContent = "New Item"; // Set its text
    document.getElementById("itemList").appendChild(newItem); // Add it to the list
});
