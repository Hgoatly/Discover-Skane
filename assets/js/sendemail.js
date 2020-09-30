//sendMail function coded as per CI Resume walkthrough.
function sendMail(contactForm) {
    emailjs.send("outlook", "Discover Skåne", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "my_recommendations": contactForm.suggestions.value
    })
     .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
