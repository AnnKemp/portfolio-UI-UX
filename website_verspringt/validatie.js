function leeg() {
    
     var a=document.getElementsByTagName('input');
     var i;
    
    for (i=0; i<=a.length; i++){
     
     a[i].style.borderColor="#ccc";
    }
    document.forms[0].onderwerp.style.borderColor="#ccc";
}

function validateForm() {

  var valid = 1;
 
  var email = document.getElementById('email');
  var naam = document.getElementById('name');
  var fname = document.getElementById('fname');
  var message= document.getElementById("message");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if (fname.value === "" || fname.value === null || fname.value === undefined || fname.value === "Graag je voornaam . . .*" || !isNaN(fname.value) ) {
    valid = 0;
    fname.value = "Graag je voornaam . . .*";
    fname.style.color = "red";
    fname.style.borderColor="red";
  } else {
    fname.style.color = "black"; 
    fname.style.borderColor="#ccc";
  }
  
if (naam.value === "" || naam.value === null ||naam.value === undefined || naam.value === "Graag je achternaam . . .*" || !isNaN(naam.value) ) {
    valid = 0;
    naam.value = "Graag je achternaam . . .*";
    naam.style.color = "red";
    naam.style.borderColor="red";
   
} else {
    naam.style.color = "black"; 
    naam.style.borderColor="#ccc";
  }
  if (email.value === "" || email.value === null ||email.value === undefined || email.value === "Graag je e-mailadres . . .*" || email.value === "Ongeldig e-mailadres!") {
    valid = 0;
    email.value = "Graag je e-mailadres . . .*";
    email.style.color = "red";
    email.style.borderColor="red";
  }
   if(!filter.test(email.value)) {
     valid = 0;
     email.value = "Ongeldig e-mailadres!";
     email.style.color = "red";
     email.style.borderColor="red";
   } else {
    email.style.color = "black";
    email.style.borderColor="#ccc";
  }
   if (message.value === "" || message.value === null ||message.value === undefined || message.value === "Uw boodschap is . . . ?") {
    valid = 0;
    message.value = "Uw boodschap is . . . ?";
    message.style.color = "red";  
    message.style.borderColor="red";
   } else {
    message.style.color = "black"; 
    message.style.borderColor="#ccc";
  }
if (!valid) { 
   email ="";
   naam ="";
   fname ="";
   message="";
   return false;
    }
}