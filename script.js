//declaring variables, Validations 
const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('nameId');
const phoneInput = document.getElementById('phoneId');
const emailInput = document.getElementById('emailId');
const commentInput = document.getElementById('messageId');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const commentError = document.getElementById('messageError');

//creating a function to validate the name
function validName() {
  const nameValue = nameInput.value.trim(); // Trimmed to remove leading/trailing spaces
  const nameValid = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})?(?:\s[a-zA-Z]{3,})?$/; // Updated regex pattern

  if (!nameValue) {
      nameError.textContent = 'Name is required.';
      return false;
  } else if (!nameValid.test(nameValue)) {
      nameError.textContent = 'Enter a valid name.';
      return false;
  } else {
      nameError.textContent = '';
      return true;
  }
}

nameInput.addEventListener('input', function(){
    nameError.textContent = '';                 //clears the error message 
});

//creating a function to check the validity of a phone number
function validPhone() {
  const phoneValue = phoneInput.value.trim(); // Trimmed to remove leading/trailing spaces
  const phoneValid = /^\d{8,20}$/; // the regex to match phone numbers with 8 to 20 digits

  if (!phoneValue) {
      phoneError.textContent = 'Phone is required.';
      return false;
  } else if (!phoneValid.test(phoneValue)) {
      phoneError.textContent = 'Enter a valid phone number.';
      return false;
  } else {
      phoneError.textContent = '';
      return true;
  }
}

phoneInput.addEventListener('input', function () {
  phoneError.textContent = ''; // Clears the error message when typing
});


//creating a function to check the validity of an email
function validEmail(){
    const emailValue = emailInput.value;
    const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,4}$/;        //email format
    if(!emailValue){
        emailError.textContent = 'Email is required.';
        return false;
    }else if(!emailValid.test(emailValue)){
        emailError.textContent = 'Enter a valid email address.';
        return false;
    }else{
        emailError.textContent = '';
        return true;
    }
}
emailInput.addEventListener('input', function(){
    emailError.textContent = '';                 //clears the error message when typing
})

//creating a function to check if there is text in a message section
function validComment(){
    const commentValue = commentInput.value;
    if(!commentValue){
        messageError.textContent = 'Message is required.';
       return false;
   }else{
       commentError.textContent = '';
       return true;
   }
}
commentInput.addEventListener('input', function(){
    commentError.textContent = '';              //clears the error message 
});

//preventing the form submission if the values do not meet the requirement
myForm.addEventListener('submit', function(event){
    event.preventDefault();
    const isNameValid = validName();
    const isPhoneValid = validPhone();      
    const isEmailValid = validEmail();
    const isCommentValid = validComment();

    //submitting the form if the values are all correct
    if(isNameValid && isPhoneValid && isEmailValid && isCommentValid){
      var params = {
        name: document.getElementById('nameId').value,
        phone: document.getElementById('phoneId').value,
        email: document.getElementById('emailId').value,
        message: document.getElementById('messageId').value,
      };
      
      const serviceID = "service_9jnw6ar"; 
      const templateID = "template_wcsvaej";
      
      emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById('nameId').value = '';
        document.getElementById('phoneId').value = '';
        document.getElementById('emailId').value = '';
        document.getElementById('messageId').value = '';
        console.log(res);

        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          showConfirmButton: false,
          timer: 4000 // Close the alert after 4 seconds
        }).then(() => {
          myForm.reset(); // Reset the form after the alert is closed
        });
      })
      .catch((err) => console.log(err));
    }
});


//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
/*=====================Get in touch button=============== */
document.getElementById('getInTouch').addEventListener('click', function() {
  document.querySelector('#contact').scrollIntoView();
});

