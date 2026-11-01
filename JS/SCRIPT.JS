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

})

function openLightbox(src){
    document.getElementById("Lightbox").style.display = "flex";
    document.getElementById("LightboxImg").src = src;
}

function closeLightbox() {
    document.getElementById("Lightbox").style.display = "none";
}

var products = [
    { name: "casket", price: "R4000", img: "images/JZA7479.webp"},
    { name: "coffin", price: "R7500", img: "images/IMG_3959_113fa66d-4c82-441a-b0fd-8ed6209342f6.jpg"},
    { name: "flowers", price: "R750", img: "images/OIP.webp"},
    { name: "cars", price: "R7000-R8000", img: "images/silver-cars-norwich-hearse.jpeg"},
];

function loadProducts(){
    var container = document.getElementById("productList");
    if (!container) return;
    for (var i = 0; i< products.length; i++) {
        var p = products[i];
        
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = p.img;
        var h3 = document.createElement("h3");
        h3.textContent = p.name;
        var para = document.createElement("p");
        para.textContent = p.price;

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(para);
        container.appendChild(div);
    }
}


    


