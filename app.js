document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const zipInput = document.getElementById('zip');
    const emailInput = document.getElementById('email');
    
    // Automatically place the cursor in the first field
    cityInput.focus();

    // Zip code autocomplete
    zipInput.addEventListener('input', function() {
        const zipValue = zipInput.value.trim();
        if (zipValue === '95758' || zipValue === '95624') {
            cityInput.value = 'Elk Grove';
            stateInput.value = 'CA';
        } else {
            cityInput.value = '';
            stateInput.value = '';
        }
    });

    // Form submission and validation
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Validation
        const city = cityInput.value.trim();
        const state = stateInput.value.trim().toUpperCase();
        const zip = zipInput.value.trim();
        const email = emailInput.value.trim();

        if (city === '') {
            alert('City field must not be empty.');
            cityInput.focus();
            return;
        }

        if (state.length !== 2) {
            alert('State field must contain 2 letters (convert to uppercase).');
            stateInput.focus();
            return;
        }

        if (!/^\d{5}$/.test(zip)) {
            alert('Zip code must contain 5 digits.');
            zipInput.focus();
            return;
        }

        if (!email.includes('@') || email.length < 3) {
            alert('Email address must contain at least 3 characters, including "@" symbol.');
            emailInput.focus();
            return;
        }

        // If all validations pass, you can submit the form or perform other actions
        alert('Form submitted successfully!');
        // Uncomment the line below to submit the form programmatically if needed
        // this.submit();
    });
});
