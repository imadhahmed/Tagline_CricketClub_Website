function validate() {
    // Get the form object
    let form = document.forms["appForm"];

    // List of field names to validate
    let fields = ["fullName", "dob", "address", "contactNumber", "email","experience","details","injuryDetails"];
    
    // Loop through each field and check if it's empty
    for (let i = 0; i < fields.length; i++) {
        let fieldName = fields[i];
        let fieldValue = form[fieldName].value.trim(); // Trim spaces
        if (fieldValue === "") {
            // Show inline error message
            alert(`The ${fieldName.replace(/([A-Z])/g, ' $1')} field must be filled out`);
            form[fieldName].focus(); // Focus the first invalid field
            return false; // Stop form submission
        }
    }

    // Additional validations (e.g., contactNumber, email format)
    let contactNumber = form["contactNumber"].value.trim();
    let email = form["email"].value.trim();

    // Validate contact number (e.g., ensure it's numeric and 10 digits)
    if (!/^\d{10}$/.test(contactNumber)) {
        alert("Please enter a valid 10-digit contact number.");
        form["contactNumber"].focus();
        return false;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        form["email"].focus();
        return false;
    }

    return true; // Allow form submission if all fields are valid
}
