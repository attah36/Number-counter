// This script implements a simple counter functionality
const increaseButton = document.getElementById("increasebutton");
const decreaseButton = document.getElementById("decreasebutton");
const resetButton = document.getElementById("resetbutton");
const numberValue = document.getElementById("numberValue");

// Initialize the counter value
let counter = 0;

function renewDisplay() {
  numberValue.textContent = counter;
}

// The event listeners for the buttons and how it function
increaseButton.addEventListener("click", () => {
  counter++;
  renewDisplay();
});
// An event listener for the decrease button and how it will fuction
decreaseButton.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  renewDisplay();
});
// An event listner for the default button and how it will fuction
resetButton.addEventListener("click", () => {
  counter = 0;
  renewDisplay();
});
