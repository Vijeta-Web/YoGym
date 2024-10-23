let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let popup2 = document.querySelector('.top-btn');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    popup2.classList.toggle('active');

}



window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    popup2.classList.remove('active');

}


// let popup = document.querySelector('#menu-icon');
// let popup2 = document.querySelector('.top-btn');


// popup.onclick = () => {
//     popup.classList.toggle('bx-x');
//     popup2.classList.toggle('.container1');

// }



// window1.onscroll = () => {
//    popup.classList.remove('bx-x');
//     popup2.classList.remove('.container1');

// }
// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Fit Your Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Weight Lose'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
loop: true,
  });


//   user login code
// const =document.getElementById('signUpButton');
// const signInButton=document.getElementById('signInButton');
// const signInForm=document.getElementById('SignIn');
// const signUpForm=document.getElementById('SignUp');




// signUpButton.addEventListener('click', function(){
//     signInButton.style.display="none";
//     signUpButton.style.display="block";
// });

// signInButton.addEventListener('click', function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// });

// const signUpButton = document.getElementById("signUpButton");
// signUpButton.addEventListener("click",function(){
//     document.getElementById("signUpButton").signInForm.style.display="none";
// });


// const signInButton = document.getElementById("signInButton");
// signInButton.addEventListener("click",function(){
//     document.getElementById("signUpButton").signUpForm.style.display="block";
// });
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signUp');


// const element = document.getElementById("signInButton");
// element.addEventListener("click", function(){
//     document.getElementById("k").innerHTML = "hl";
// })
// ;   
// let signUnButton = document.querySelector("#signUnButton");
// signInButton.addEventListener("click", () => {
//    display:"none";
// });

   
       

// let signInButton = document.querySelector("#signInButton");
// signUpButton.addEventListener("click", () => {
//    display:"none";
// });

// main login
// let signupbtn = document.querySelector("#signUpButton");
// let signinbtn = document.querySelector("#signInButton");

// let form1 = document.querySelector("#signin");
// let form2 = document.querySelector("#signup");

// signupbtn.addEventListener('click', function(){
//     form1.style.display="none";
//     form2.style.display="block";
// });

// signinbtn.addEventListener('click', function(){
//     form1.style.display="block";
//     form2.style.display="none";
// });





// let showpopbtn = document.querySelector(".nav-btn");
// let form3 = document.querySelector("#signup");
// let form4 = document.querySelector("#signip");


// showpopbtn.addEventListener("click", function(){
// form3.style.display="block";
// form4.style.display="none";
// });
