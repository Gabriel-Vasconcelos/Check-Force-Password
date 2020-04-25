function passwordForce(){
	var inputElement = document.querySelector("input");
	var password = inputElement.value;
	var forca = 0;

	if (password.length > 0 && password.length <= 5) 
		forca += 10;
	
	else if (password.length >= 6) 
		forca += 25;
	
	if(password.length > 5 && password.match(/[a-z]+/))
		forca += 25;

	if (password.length > 6 && password.match(/[A-Z]+/))
		forca += 25;

	if (password.length > 7 && password.match(/[!@#$%¨&*()\/-_'"]+/))
		forca += 25;


	checkPassword(forca);

}

function checkPassword(forca){

	if (forca > 0 && forca <= 10)
		document.querySelector("div").innerHTML = " <span style = 'color: #ff0000'> Muito Fraca </span> ";

	else if(forca > 10 && forca <= 35)
		document.querySelector("div").innerHTML = " <span style = 'color: #ff0000'> Fraca </span> ";

	else if(forca > 35 && forca <= 50)
		document.querySelector("div").innerHTML = " <span style = 'color: #ffd700'> Média </span> ";

	else if(forca > 50 && forca <= 75)
		document.querySelector("div").innerHTML = " <span style = 'color: #7fff00'> Forte </span> ";

	else if(forca > 75 && forca <= 100)
		document.querySelector("div").innerHTML = " <span style = 'color: #008000'> Excelente </span> ";

}