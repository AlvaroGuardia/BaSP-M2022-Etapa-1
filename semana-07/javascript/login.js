window.onload = function () {

	//Validate if the variable has equal or more defined length

	function validateMinimumLenght(val, leng) {
		if (val.length >= leng) {
			return 1;
		} else {
			return 0;
		}
	};

	// Search for a match of the regex in the param value

	function lookForRegex(value, regex) {
		if (value.match(regex)) {
			return 1;
		} else {
			return 0;
		}
	};

	// General commands

	var errors = document.getElementsByClassName('error');
	var inputsData = document.getElementsByTagName('input');

	// Inicializate global variables

	var emailWarning = 1;
	var passwordWarning = 1;
	var alertWarning = 0;

	// Regex declarations

	var mailRegex = /@/;
	var dotComRegex = /.com/;


	// Characters allows

	var num = [0,1,2,3,4,5,6,7,8,9];
	var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];
	var specChar = ['+','-','_','@','*','?','$','^','#','.',];

	// Hide the error message on Focus

	for (var i = 0; i <= 1; i++) {
		let messages = errors[i];
		inputsData[i].onfocus = function () {
			messages.style.visibility = "hidden";
		}
	};

	// Validate email

	inputsData[0].onblur = validateEmail;
	function validateEmail() {
		var email = inputsData[0].value;
		var gotDotCom = lookForRegex(email, dotComRegex);
		var gotEmailChar = lookForRegex(email, mailRegex);
		if (gotDotCom === 1 && gotEmailChar === 1) {
			emailWarning = 0;
			return;
		} else {
			errors[0].style.visibility = 'visible';
			emailWarning = 1;
			return;
		}
	};

	// Validate password

	inputsData[1].onblur = validatePassword;
	function validatePassword() {
		var pass = inputsData[1].value;
		var passLength = validateMinimumLenght(pass, 8);

		var abcA = false;
		var numA = false;
		var specCharA = false;

		for (var i = 0; i < pass.length; i++) {
            for (var j = 0; j < specChar.length; j++){
                if (pass[i] == specChar[j]){
                    specCharA = true;
                    break;}
            }
		}
			
		for (var i = 0; i < pass.length; i++){  
				if (!numA){
					for (var j = 0; j < num.length; j++){
						if (pass[i]==num[j]){
							numA = true;
							break;}  
					} 
				}
				if (!abcA){
					for (var j = 0; j < abc.length; j++){
						if (pass[i]==abc[j]){
							abcA = true;
							break;
						}
					}
				}
				if (numA && abcA){
					break;
				}
		}

		if (passLength === 1 && numA == true && abcA == true && specCharA == false) 
			{
			passwordWarning = 0;
			return;
		} else {
			errors[1].style.visibility = 'visible';
			passwordWarning = 1;
			return;
		}
	};

	// Validate submit

	var formButton = document.getElementsByTagName('button')[0];

	formButton.addEventListener('click', submitVal);

	function submitVal() {
		var messageAlert = [];
		if (emailWarning === 1) {
			messageAlert.push('E-mail: ' + errors[0].innerHTML);
			alertWarning = 1;
		}
		if (passwordWarning === 1) {
			messageAlert.push('Password: ' + errors[1].innerHTML);
			alertWarning = 1;
		}
		if (alertWarning === 1) {
			alert('Submit failed. Wrong data entry in the category of: \n' + messageAlert.join('\n'));
			alertWarning = 0;
		} 
		else  {
			submitInfo(alertWarning)
		}
	}
	

function submitInfo(alertWarning) {
	 if ( alertWarning == 0 ) {
	   var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
   
	   fetch(url.concat('?email=', inputsData[0].value, '&password=', inputsData[1].value))
		 .then(function(response){
		   return response.json();
		 })
	   
		 .then(function(data){
			if (data.success){
				alert('Submit Corret');
				console.log(data.msg);
				alert(data.msg)}
			else {throw new Error (data.msg)}
		 })
		 .catch(error => {
			alert(error);
		 })
	 }
   }
};
