function check()
{
	var nameError = document.getElementById("nameError");
	var phoneError = document.getElementById("phoneError");
	
	
	if(document.getElementById("name").value == "")
	{
		nameError.innerHTML = "Please enter your name." ;
	}
	else if(document.getElementById("name").value.match(/[^a-zA-Z]/))
	{
		nameError.innerHTML = "Must only contain letters." ;
	}
	else
	{
		nameError.innerHTML = "";
	}
	
	
	if(document.getElementById("phone").value == "")
	{
		phoneError.innerHTML = "Please enter your phone number." ;
	}
	else if(! document.getElementById("phone").value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/))
	{
		phoneError.innerHTML = "Must be in the form of XXX-XXX-XXXX (make sure to include '-')." ;
	}
	else
	{
		phoneError.innerHTML = "";
	}
	
	if(document.getElementById("address").value == "")
	{
		document.getElementById("addressError").innerHTML = "Please enter your address.";
		return false;
	}
		
	if(nameError.innerHTML == phoneError.innerHTML)
		return true;
	return false;
}