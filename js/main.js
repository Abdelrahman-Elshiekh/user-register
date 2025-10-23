var nameinput=document.querySelector('#Name')
var emailinput=document.querySelector('#Email')
var passwordinput = document.querySelector("#Password");
var sucss = document.querySelector('.sucss')
var non = document.querySelector(".non");
var none =document.querySelector('.none')
var emailin = document.querySelector("#emailin");
var passin = document.querySelector("#passin");
var nnon = document.querySelector(".nnon");
var nnonn = document.querySelector(".nnonn");
var lgin = document.querySelector("#thelgin");
var carton = document.querySelector("#carton");

var allregisters;
if (localStorage.getItem("container") === null) {
 allregisters = [];
} else {
   allregisters = JSON.parse(localStorage.getItem("container"));
}

function register(){
 for (var i = 0; i < allregisters.length; i++) {
   if (
     allregisters[i].email == emailinput.value
   ) {
     none.classList.replace("d-none", "d-block");
     sucss.classList.replace("d-block", "d-none");
     non.classList.replace("d-block", "d-none");
     return;
   }

 }
 if (
  nameinput.value == "" ||
  emailinput.value == "" ||
  passwordinput.value == ""
) {
  non.classList.replace("d-none", "d-block");
  sucss.classList.replace("d-block", "d-none");
   none.classList.replace("d-block", "d-none");
}
else {
     var registers = {
       name: nameinput.value,
       email: emailinput.value,
       password: passwordinput.value,
     };
     allregisters.push(registers);
     console.log(allregisters);
     localStorage.setItem("container", JSON.stringify(allregisters));
     clearinputs();
  sucss.classList.replace("d-none", "d-block");
  non.classList.replace("d-block", "d-none");
  none.classList.replace("d-block", "d-none");
}
 
}

function clearinputs(){
     nameinput.value=null;
     emailinput.value=null;
     passwordinput.value=null;
}

function validate(){
    if (passin.value == "" && emailin.value == "") {
      nnon.classList.replace("d-none", "d-block");
      nnonn.classList.replace("d-block", "d-none");
      return;
    }
    for(var i=0;i<allregisters.length;i++){
    if(emailin.value==allregisters[i].email&&passin.value==allregisters[i].password){
        localStorage.setItem(  'username'  ,allregisters[i].name)
       nnon.classList.replace("d-block", "d-none");
       nnonn.classList.replace("d-block", "d-none");
       window.location.href = "welcome.html";
    }
    
    else{
          nnon.classList.replace("d-block", "d-none");
          nnonn.classList.replace("d-none", "d-block");
    }
    }

}


display();

function display(){
    var cartona=` <h1 class="text-info" >welcome ${localStorage.getItem('username')}</h1>`;
    document.getElementById("carton").innerHTML = cartona;
}










