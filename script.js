document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        // Prevent form submission to check validations
        event.preventDefault();

        // Clear previous error messages
        const errorMessages = form.querySelectorAll(".error");
        errorMessages.forEach((msg) => msg.remove());

        let isValid = true;

        // Full Name Validation
        const fullName = document.getElementById("fullName");
        if (!fullName.value.trim()) {
            showError(fullName, "Full Name is required.");
            isValid = false;
        }

        // Date of Birth Validation
        const dob = document.getElementById("dob");
        if (!dob.value.trim()) {
            showError(dob, "Date of Birth is required.");
            isValid = false;
        }

        // Address Validation
        const address = document.getElementById("address");
        if (!address.value.trim()) {
            showError(address, "Address is required.");
            isValid = false;
        }

        // Contact Number Validation
        const contactNumber = document.getElementById("contactNumber");
        const phoneRegex = /^[0-9]{10}$/;
        if (!contactNumber.value.trim() || !phoneRegex.test(contactNumber.value)) {
            showError(contactNumber, "Enter a valid 10-digit Contact Number.");
            isValid = false;
        }

        // Email Validation
        const email = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            showError(email, "Enter a valid Email Address.");
            isValid = false;
        }

        // Cricket Experience Validation
        const experience = form.querySelector('input[name="experience"]:checked');
        if (!experience) {
            showError(
                form.querySelector('input[name="experience"]'),
                "Please select your Cricket Experience."
            );
            isValid = false;
        }

        // Role Validation
        const role = form.querySelectorAll('input[name="role"]:checked');
        if (role.length === 0) {
            showError(
                form.querySelector('input[name="role"]'),
                "Please select at least one Primary Role."
            );
            isValid = false;
        }

        // Batting Style Validation
        const battingStyle = form.querySelector('input[name="battingStyle"]:checked');
        if (!battingStyle) {
            showError(
                form.querySelector('input[name="battingStyle"]'),
                "Please select a Batting Style."
            );
            isValid = false;
        }

        // Bowling Style Validation
        const bowlingStyle = form.querySelector('input[name="bowlingStyle"]:checked');
        if (!bowlingStyle) {
            showError(
                form.querySelector('input[name="bowlingStyle"]'),
                "Please select a Bowling Style."
            );
            isValid = false;
        }

        // Injuries/Medical Conditions Dependency Validation
        const injuries = form.querySelector('input[name="injuries"]:checked');
        const injuryDetails = document.getElementById("injuryDetails");
        if (injuries && injuries.value === "yes" && !injuryDetails.value.trim()) {
            showError(injuryDetails, "Please specify your injuries or medical conditions.");
            isValid = false;
        }

        if (isValid) {
            // Submit the form if all validations pass
            form.submit();
        }
    });

    function showError(inputElement, message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error";
        errorMessage.style.color = "red";
        errorMessage.textContent = message;
        inputElement.parentElement.appendChild(errorMessage);
    }
});
