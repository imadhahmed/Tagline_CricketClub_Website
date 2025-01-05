function validate() {
    const form = document.forms["appForm"];

    //Array to store the field names to check for empty values
    let fields = ["fullName", "dob", "address", "contactNumber", "email"];

    // Loop for checking every empty field 
    for (let i = 0; i < fields.length; i++)
    {  
        let fieldName = fields[i];
        let fieldValue = form[fieldName].value.trim(); 
        if (fieldValue === "" ) 
        {
            alert(`The ${fieldName} field must be filled out`);
            form[fieldName].focus(); 
            return false; 
        }
    }

    // check the experience radio button
    let experience = document.forms["appForm"]["experience"];
    let experienceSelected = false;
    for (let i = 0; i < experience.length; i++) {
        if (experience[i].checked) {
            experienceSelected = true;
            break;
        }
    }
    if (!experienceSelected) {
        alert("Please select your experience (Yes/No).");
        experience[0].focus(); 
        return false;
    }

    //check the roles checkbox and at least one role must be selected

    let role = document.forms["appForm"]["role"];
    let roleSelected = false;
    for (let i = 0; i < role.length; i++) {
        if (role[i].checked) {
            roleSelected = true;
            break;
        }
    }
    if (!roleSelected) {
        alert("Please select your primary role.");
        experience[0].focus(); 
        return false;
    }

    // Check if "battingStyle" radio button is selected
    let battingStyle = document.forms["appForm"]["battingStyle"];
    let battingStyleSelected = false;
    for (let i = 0; i < battingStyle.length; i++) {
        if (battingStyle[i].checked) {
            battingStyleSelected = true;
            break;
        }
    }
    if (!battingStyleSelected) {
        alert("Please select your batting style.");
        experience[0].focus(); 
        return false;
    }

    // Check if "bowlingStyle" radio button is selected
    let bowlingStyle = document.forms["appForm"]["bowlingStyle"];
    let bowlingStyleSelected = false;
    for (let i = 0; i < bowlingStyle.length; i++) {
        if (bowlingStyle[i].checked) {
            bowlingStyleSelected = true;
            break;
        }
    }
    if (!bowlingStyleSelected) {
        alert("Please select your bowling style.");
        experience[0].focus(); 
        return false;
    }


    // Check fitnes radio button is selected

    let fit = document.forms["appForm"]["fit"];
    let fitSelected = false;
    for (let i = 0; i < fit.length; i++) {
        if (fit[i].checked) {
            fitSelected = true;
            break;
        }
    }
    if (!fitSelected) {
        alert("Please select your fitness status.");
        fit[0].focus(); 
        return false;
    }


    // validate e-mail and contac tnumber
    let contactNumber = form["contactNumber"].value.trim();
    let email = form["email"].value.trim();

    if (contactNumber.length !== 10 || isNaN(contactNumber)) 
    {
        alert("Please enter a valid 10-digit contact number.");
        form["contactNumber"].focus();
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        form["email"].focus();
        return false;
    }
    

    alert("registration successful");
    
    return true; 
}
