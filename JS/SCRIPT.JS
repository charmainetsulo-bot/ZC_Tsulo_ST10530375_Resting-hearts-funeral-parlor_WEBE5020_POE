document.addEventListener("DOMContentLoaded", function () { 
    let year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    let readMoreButton = document.getElementById("readMoreButton");

    let extraText = document.getElementById("extraText");
 
if (readMoreButton && extraText){

    extraText.style.display = "none";

    readMoreButton.addEventListener("click", function () {
        if (extraText.style.display === "none") {
            extraText.style.display = "block";
            readMoreButton.textContent = "Read Less";
        } else {
            extraText.style.display = "none";

            readMoreButton.textContent = "Read More";
        }
        
    });
 }
    let welcomeButton = document.getElementById("WelcomeButton");

 if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        alert(
            "Welcome to Resting Hearts Funeral Parlor." + "we are here to support families with care and dignity."
          
        )
  } );
}




var form =  document.querySelector("form");
var formMessage = document.getElementById("formMessage");
if (form && formMessage) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var nameInput = form.querySelector('input[type="text"]');
        var emailInput = form.querySelector('input[type="email"]');

        if (nameInput.value.length < 3) {
            formMessage.style.color = "red";
            formMessage.textContent = "Name must be at least 3 letter";
            return;
        }
        if (emailInput.value.includes("@") == false) {
            formMessage.style.color = "red";
            formMessage.textContent = "Enter valid email with @";
            return;

        }
        formMessage.style.color = "green";
        formMessage.textContent = "Enquiry sent successfully!";
        form.reset();
    });

}

});
    



