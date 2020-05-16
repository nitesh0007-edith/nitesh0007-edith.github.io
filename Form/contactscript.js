function validation(){
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var error  = document.getElementById("error");
	var abc;
	
	error.style.padding = "10px";
	
	if(name.length <5){
		abc = "please enter your full name";
		error.innerHTML = abc;
		return false;
	}
	if(isNaN(phone) || phone.length != 10){
		abc = "please enter your valid phone no.";
		error.innerHTML = abc;
		return false;
	}
	if(message.length <= 30){
		abc = "please enter the msg. in more than 30 characters";
		error.innerHTML = abc;
		return false;
	}
	alert("Form Submitted Successfully!  Thank You :");
	return true;
	
	
	
}