window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    const hello = sayHello();
    console.log(hello);

    // Add event listener for the submit button
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', handleButtonClick);
    }
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

/**
 * Handles the button click event to show the selected radio button value.
 */
function handleButtonClick() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        alert(selectedOption.value);
    } else {
        alert("Please select an option.");
    }
}
