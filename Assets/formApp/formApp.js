const nextBtn = document.querySelectorAll("#nextStep");
const prevBtn = document.querySelectorAll("#prevStep");
const formpro = document.querySelectorAll(".formprogress");
const numCount = document.querySelectorAll(".numCount");


let formproNum = 0;
 
nextBtn.forEach(btn=>{
    btn.addEventListener("click", (e) =>{
        formproNum++;
        updateformpro();
        e.preventDefault();
        updateCount();
        validateForm()
    })
});
prevBtn.forEach(btn=>{
    btn.addEventListener("click", (e) =>{
        formproNum--;
        e.preventDefault();
        updateformpro();
        updateCount();
    });
});

function updateformpro(){
    formpro.forEach(formpro =>{
        formpro.classList.contains("formprogress-active") &&
        formpro.classList.remove('formprogress-active');
    })
    formpro[formproNum].classList.add('formprogress-active');
};

function updateCount(){
    numCount.forEach((numCount, idx) =>{
        if(idx < formproNum + 1){
            numCount.classList.add('numCount-active')
        }else{
            numCount.classList.remove("numCount-active")
        }
    })
}
// Form validation
// Form validation
let nameErr = document.getElementById("name-error");
let emailErr = document.getElementById("email-error");
let phoneErr = document.getElementById("phone-error");
let submitErr = document.getElementById("submit-error");


function validateName(){
    let name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameErr.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErr.innerHTML = "Write full name";
        return false;

    }
    nameErr.innerHTML = "<i class='fal fa-check-circle'></i>";
    return true;
}
// Validating email
function validateEmail(){
    let email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailErr.innerHTML = "Email is required!";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML = "Email invalid";
        return false;
    }
    emailErr.innerHTML =  "<i class='fal fa-check-circle'></i>";
    return true;
}
// Validating phone
validatePhone=()=>{
    let phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneErr.innerHTML = "This field is required";
        return false
    }
    if(phone.length !== 11){
        phoneErr.innerHTML = "Number should be 11 digits!";
        return false
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneErr.innerHTML = "Only digits, please."
        return false;
    }
    phoneErr.innerHTML =  "<i class='fal fa-check-circle'></i>";
    return true;
}

// Validating submitBtn checking everything
validateForm=()=>{
    if(validateName() || !validatePhone() || !validateEmail()){
        // submitErr.style.display="block";
        submitErr.innerHTML="Fill all input fields to submit form";
        setTimeout(validateForm=()=>{submitErr.style.display="none";}, 3000);
        return false;
    }
}