const email = document.querySelector('#email');
const btn = document.querySelector("button");
const message = document.querySelector("small");
const errIcon = document.querySelector(".error-icon");

btn.addEventListener("click",(event)=>{

    if(email.validity.valid){
        message.textContent = "Done!";
        message.style.color = "hsl(308, 96%, 73%)";

        errIcon.style.visibility = "hidden";
    }
    else{
        message.textContent = "This doesn't seem to be a valid Email-Address!";
        message.style.color = "hsl(0, 93%, 68%)";
        
        errIcon.style.visibility = "visible";
    }
})