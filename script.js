function validate() {
    const form = document.forms["appForm"];

    //Array to store the field names to check for empty values
    let fields = ["fullName", "dob", "address", "contactNumber", "email","experience","role","battingStyle","bowlingStyle","fit","availability"];
    
    // Loop for checking every empty field 
    for (let i = 0; i < fields.length; i++)
    {  
        let fieldName = fields[i];
        let fieldValue = form[fieldName].value.trim(); 
        if (fieldValue === "") 
        {
            alert(`The ${fieldName.replace(/([A-Z])/g, ' $1')} field must be filled out`);
            form[fieldName].focus(); 
            return false; 
        }
    }

    // validate e-mail and contac tnumber
    let contactNumber = form["contactNumber"].value.trim();
    let email = form["email"].value.trim();
    
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
