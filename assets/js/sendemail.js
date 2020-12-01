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
            alert("Thank you. Your email has been sent. We'll get back to you as soon as we can!");
            document.getElementById("contact-form").reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Sorry, there has been an error. Your email has not been sent.");
        }  
    ); 

    return false;  // To block from loading a new page
 
}


