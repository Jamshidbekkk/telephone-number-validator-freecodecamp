//! Function to validate US phone numbers
function validatePhoneNumber(phoneNumber) {
    //! Regular expression for US phone number pattern
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return regex.test(phoneNumber);
}

//! Get the necessary elements
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

//! Event listener for the check button
checkBtn.addEventListener('click', function() {
    const phoneNumber = userInput.value.trim();

    if (phoneNumber === '') {
        //! If input is empty, display error message
        resultsDiv.textContent = 'Please enter a phone number.';
        return;
    }

    //! Validate the phone number
    const isValid = validatePhoneNumber(phoneNumber);

    //! Display the result
    if (isValid) {
        resultsDiv.textContent = 'Valid US phone number!';
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.textContent = 'Invalid US phone number. Please enter a valid format.';
        resultsDiv.style.color = 'red';
    }
});
