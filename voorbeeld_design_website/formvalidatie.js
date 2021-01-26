// JavaScript Document
var form = document.getElementById('formulier');

if (window.addEventListener) {
form.addEventListener('submit', checkOnSubmit);

function checkOnSubmit(e){
// verzenden niet laten doorgaan -> eerst validatie
e.preventDefault();
	
var i;	
var x=document.getElementsByClassName("leeg");
  for (i = 0; i < x.length; i++) {
	 
    if(x[i].value === "" || x[i].value === "Full name" || x[i].value === "E-mail" || x[i].value === "Subject" || x[i].value === "Message"){
		
		x[i].value=x[i].name+" is leeg!";
		x[i].style.color="red";
		x[i].style.backgroundColor="#F8E0E6";
		return false;
	 }
	else if (!(isNaN(x[i].value))){
		x[i].value="Gelieve hier gewone tekst in te vullen, geen cijfers!";
		x[i].style.color="red";
		x[i].style.backgroundColor="#F8E0E6";
	
	 }
 
	
var mail=document.getElementById("email");
var pattern=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!pattern.test(mail.value)) {
	mail.value="Het e-mailadres is niet 'OK'!";
	x[i].style.color="red";
		x[i].style.backgroundColor="#F8E0E6";
}	
	else{
	  x[i].style.color="black";
	  x[i].style.backgroundColor="white";
	  document.getElementById("formulier").submit();
	 }
	   }
}
	

	}
//--------------------------------------------------------- aparte reset functie -----------------------------------------------------------------------------
	
form.addEventListener('reset', checkOnReset);

function checkOnReset(){
			var i;	
            var x=document.getElementsByClassName("leeg");
            for (i = 0; i < x.length; i++) {
			
			 x[i].style.color="black";
	         x[i].style.backgroundColor="white";  
	}	
}
