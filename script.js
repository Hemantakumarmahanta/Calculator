// Get the input box element
const inputBox = document.getElementById('inputBox');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Define a string to store the input
let inputString = "";

// Function to update the display
function updateDisplay(value) {
    inputBox.value = value;
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerHTML.trim();  // Trim to remove any extra spaces

        if (buttonText === 'AC') {
            // Clear the input string and input box
            inputString = "";
            updateDisplay("0");
        } else if (buttonText === 'DEL') {
            // Delete the last character from the input string
            inputString = inputString.slice(0, -1);
            if (inputString === "") {
                updateDisplay("0");
            } else {
                updateDisplay(inputString);
            }
        } else if (buttonText === '=') {
            // Evaluate the expression and display the result
            try {
                // Replace symbols to ensure correct evaluation
                inputString = inputString.replace(/×/g, '*').replace(/÷/g, '/');
                const result = eval(inputString);
                updateDisplay(result);
                inputString = result.toString();  // To allow further calculations
            } catch (error) {
                updateDisplay("Error");
                inputString = "";  // Clear the input string in case of error
            }
        } else if (buttonText === "%") {
            // Calculate percentage
            inputString = (parseFloat(inputString) / 100).toString();
            updateDisplay(inputString);
        } else {
            // Append the button value to the input string
            if (inputString === "0" && buttonText !== ".") {
                inputString = buttonText;  // Replace initial "0" with the new number
            } else {
                inputString += buttonText;
            }
            updateDisplay(inputString);
        }
    });
});
