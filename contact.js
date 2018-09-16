/*
Name: Angel D. Ortiz
Date Created: 9/15/2018
Description: contact.html - site used to show our talent in making javascript validation.
An example website used for the software guild
course. The purpose of this website is to give us a foundation 
on html coding without a .css file. 
This javascript is to ensure that the user's name,phone number, and email are filled out.
Make an alert on what is missing.
*/
function validateForm() {
	var name = ""; var email = ""; var phone = "";//initialize the strings
    var x = document.forms["myForm"]["formNameInput"].value;
	var y = document.forms["myForm"]["exampleInputEmail"].value;
	var z = document.forms["myForm"]["formPhoneInput"].value;
	var valid = true;//initialize validation to true
	
    if (x === "") { //change validation on condition
        name = "- Name\n";
		valid = false;
    }
	if (y === "") {
        email = "- Email\n";
		valid = false;
    }
	if (z === "") {
        phone = "- Phone Number";
		valid = false;
    }
	
	if(!valid){	//used strings to avoid making 9 if statments
		alert("The following must be filled out:\n" + name + email + phone);
	}
	else {
		alert("Submission Successful!"); 
	}
	
	return valid;
}

