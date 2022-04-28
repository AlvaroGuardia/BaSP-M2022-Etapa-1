window.onload = function () {

	//Validate if the variable has equal or more defined length

	function validateMinimumLenght(val, leng) {
		if (val.length >= leng) {
			return 1;
		} else {
			return 0;
		}
	};

	//Validate if the variable has equal or less defined length

	function validateMaxLenght(val, leng) {
		if (val.length <= leng) {
			return 1;
		} else {
			return 0;
		}
	};

	// Search for a particular character a in the variable

	function lookForCharacter(variable, a) {
		if (variable.indexOf(a) !== -1) {
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

	var nameWarning = 1;
	var lNameWarning = 1;
	var dniWarning = 1;
	var ageWarning = 1;
	var phoneWarning = 1;
	var addressWarning = 1;
	var cityWarning = 1;
	var postalWarning = 1;
	var emailWarning = 1;
	var passwordWarning = 1;
	var rePasswordWarning = 1;
	var alertWarning = 0;

	// Regex declarations

	var mailRegex = /@/;
	var dotComRegex = /.com/;

	// Characters allows

	let num = [0,1,2,3,4,5,6,7,8,9];
	let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];
	let specChar = ['+','-','_','@','*','?','$','^','#','.',];

	// Hide the error message on Focus

	for (var i = 0; i <= 10; i++) {
		let messages = errors[i];
		inputsData[i].onfocus = function () {
			messages.style.visibility = "hidden";
		}
	};

	// Changing message of the greetings

	var message = document.getElementsByClassName('register')[0];
	var inputName = inputsData[0];
	inputName.onkeyup = function (e) {
		message.innerHTML = 'Hello ' + e.target.value;
	};

	// Validate name

	inputsData[0].onblur = validateName;
	function validateName() {
		var name = inputsData[0].value;
		var nameL = validateMinimumLenght(name, 4);
		var gotBlank = lookForCharacter(name, ' ');

		let abcB = false;
		let numB = false;
		let specCharB = false;

		for (let i = 0; i < name.length; i++) {
            for (let j = 0; j < specChar.length; j++){
                if (name[i] == specChar[j]){
                    specCharB = true;
                    break;}
            }
		}
			
		for (let i = 0; i < name.length; i++){  
				if (!numB){
					for (let j = 0; j < num.length; j++){
						if (name[i]==num[j]){
							numB = true;
							break;}  
					} 
				}
				if (!abcB){
					for (let j = 0; j < abc.length; j++){
						if (name[i]==abc[j]){
							abcB = true;
							break;
						}
					}
				}
		}
		if (nameL === 1 && numB == false && abcB == true && specCharB == false && gotBlank == 0 ) 
			{
			nameWarning = 0;
			return;
		} else {
			errors[0].style.visibility = 'visible';
			nameWarning = 1;
			return;
		}
	};

	// Validate Lastname

	inputsData[1].onblur = validateLName;
	function validateLName() {
		var lName = inputsData[1].value;
		var lNameL = validateMinimumLenght(lName, 4);
		var gotBlank = lookForCharacter(lName, ' ');

		let abcC = false;
		let numC = false;
		let specCharC = false;

		for (let i = 0; i < lName.length; i++) {
            for (let j = 0; j < specChar.length; j++){
                if (lName[i] == specChar[j]){
                    specCharC = true;
                    break;}
            }
		}
			
		for (let i = 0; i < lName.length; i++){  
				if (!numC){
					for (let j = 0; j < num.length; j++){
						if (lName[i]==num[j]){
							numC = true;
							break;}  
					} 
				}
				if (!abcC){
					for (let j = 0; j < abc.length; j++){
						if (lName[i]==abc[j]){
							abcC = true;
							break;
						}
					}
				}
		}
		if (lNameL === 1 && numC == false && abcC == true && specCharC == false && gotBlank == 0 ) 
			{
			lNameWarning = 0;
			return;
		} else {
			errors[1].style.visibility = 'visible';
			lNameWarning = 1;
			return;
		}
	};

	// Validate DNI 

	inputsData[2].onblur = validateDni;
	function validateDni() {
		var dni = inputsData[2].value;
		var dniLength = validateMinimumLenght(dni, 7);
		var dniIsNumber = dni % 1;
		if (dniLength === 1 & dniIsNumber === 0) {
			dniWarning = 0;
			return;
		} else {
			errors[2].style.visibility = 'visible';
			dniWarning = 1;
			return;
		}
	};

	// Validate Age

	inputsData[3].onblur = validateAge;
	function validateAge(){
		var age = inputsData[3].value;
		var passLength = validateMinimumLenght(age, 10);

        for (let i = 0; i < age.length; i++)
        {
            if (i == 2 || i==5)
            {
                if(age[i]!='/')
                {
					errors[3].style.visibility = 'visible';
					ageWarning = 1
                    return false
                }
            }
        }
        if (isNaN(age[0]) || isNaN(age[1]) || isNaN(age[3]) || isNaN(age[4]) || isNaN(age[6]) ||
        isNaN(age[7]) || isNaN(age[8]) || isNaN(age[9]))
        {
			errors[3].style.visibility = 'visible';
			ageWarning = 1
            return false;
        }
        var parts = age.split("/");
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);
        var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
        var dob = year * 10000 + month * 100 + day * 1;
        if (now - dob < 180000)
        {
			errors[3].style.visibility = 'visible';
			ageWarning = 1
            return false;
        }
        // Check the ranges of month and year
        if(year < 1900 || year > 2100 || month == 0 || month > 12)
        {
			errors[3].style.visibility = 'visible';
			ageWarning = 1
            return false;
        }
        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        // Adjust for leap years
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) && passLength === 1)
        {
            monthLength[1] = 29;
			ageWarning = 0;
        }
        // Check the range of the day
		ageWarning = 0
        return day > 0 && day <= monthLength[month - 1];
    }

	// Validate phone number

	inputsData[4].onblur = validatePhoneNumber;
	function validatePhoneNumber() {
		var phoneNumber = inputsData[4].value;
		var isItANumber = phoneNumber % 1;
		var result = validateMinimumLenght(phoneNumber, 10);
		if (isItANumber === 0 && result === 1) {
			phoneWarning = 0;
			return;
		} else {
			errors[4].style.visibility = 'visible';
			phoneWarning = 1;
			return;
		}
	};

	// Validate Address

	inputsData[5].onblur = validateAddress;
	function validateAddress() {
		var address = inputsData[5].value;
		var addressL = validateMinimumLenght(address, 4);
		var gotBlank = lookForCharacter(address, ' ');

		let abcD = false;
		let numD = false;
		let specCharD = false;

		for (let i = 0; i < address.length; i++) {
            for (let j = 0; j < specChar.length; j++){
                if (address[i] == specChar[j]){
                    specCharD = true;
                    break;}
            }
		}
			
		for (let i = 0; i < address.length; i++){  
				if (!numD){
					for (let j = 0; j < num.length; j++){
						if (address[i]==num[j]){
							console.log(i)
							numD = true;
							break;}  
					} 
				}
				if (!abcD){
					for (let j = 0; j < abc.length; j++){
						if (address[i]==abc[j]){
							abcD = true;
							break;
						}
					}
				}
		}
		if (addressL == 1 && numD == true && abcD == true && specCharD == false && gotBlank == 1 ) 
			{
			addressWarning = 0;
			return;
		} else {
			errors[5].style.visibility = 'visible';
			addressWarning = 1;
			return;
		}
	};

	// Validate city of resident

	inputsData[6].onblur = validateCity;
	function validateCity() {
		var city = inputsData[6].value;
		var cityL = validateMinimumLenght(city, 4);
		var gotBlank = lookForCharacter(city, ' ');

		let abcE = false;
		let numE = false;
		let specCharE = false;

		for (let i = 0; i < city.length; i++) {
            for (let j = 0; j < specChar.length; j++){
                if (city[i] == specChar[j]){
                    specCharE = true;
                    break;}
            }
		}
			
		for (let i = 0; i < city.length; i++){  
				if (!numE){
					for (let j = 0; j < num.length; j++){
						if (city[i]==num[j]){
							numE = true;
							break;}  
					} 
				}
				if (!abcE){
					for (let j = 0; j < abc.length; j++){
						if (city[i]==abc[j]){
							abcE = true;
							break;
						}
					}
				}
		}
		if (cityL === 1 && numE == true && abcE == true && specCharE == false && gotBlank == 0 ) 
			{
			cityWarning = 0;
			return;
		} else {
			errors[6].style.visibility = 'visible';
			cityWarning = 1;
			return;
		}
	};

	// Validate Postal Code

	inputsData[7].onblur = validatePostal;
	function validatePostal() {
		var postalCode = inputsData[7].value;
		var postalLength1 = validateMinimumLenght(postalCode, 4);
		var postalLength2 = validateMaxLenght(postalCode, 5);
		var postalIsNumber = postalCode % 1;
		if (postalLength1 == 1 && postalLength2 == 1  && postalIsNumber === 0) {
			dniWarning = 0;
			return;
		} else {
			errors[7].style.visibility = 'visible';
			postalWarning = 1;
			return;
		}
	};

	// Validate email

	inputsData[8].onblur = validateEmail;
	function validateEmail() {
		var email = inputsData[8].value;
		var gotDotCom = lookForRegex(email, dotComRegex);
		var gotEmailChar = lookForRegex(email, mailRegex);
		if (gotDotCom === 1 && gotEmailChar === 1) {
			emailWarning = 0;
			return;
		} else {
			errors[8].style.visibility = 'visible';
			emailWarning = 1;
			return;
		}
	};

	// Validate password

	inputsData[9].onblur = validatePassword;
	function validatePassword() {
		var pass = inputsData[9].value;
		var passLength = validateMinimumLenght(pass, 8);

		let abcA = false;
		let numA = false;
		let specCharA = false;

		for (let i = 0; i < pass.length; i++) {
            for (let j = 0; j < specChar.length; j++){
                if (pass[i] == specChar[j]){
                    specCharA = true;
                    break;}
            }
		}
			
		for (let i = 0; i < pass.length; i++){  
				if (!numA){
					for (let j = 0; j < num.length; j++){
						if (pass[i]==num[j]){
							numA = true;
							break;}  
					} 
				}
				if (!abcA){
					for (let j = 0; j < abc.length; j++){
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
			errors[9].style.visibility = 'visible';
			passwordWarning = 1;
			return;
		}
	};

	// Validate repeat password

	inputsData[10].onblur = validateRepPassword;
	function validateRepPassword() {
		var pass = inputsData[9].value;
		var rPass = inputsData[10].value;
		var isSamePass = lookForCharacter(rPass, pass);
		if (isSamePass === 1 && pass.length === rPass.length) {
			rePasswordWarning = 0;
			return;
		} else {
			errors[10].style.visibility = 'visible';
			rePasswordWarning = 1;
			return;
		}
	};

	// Validate submit

	var formButton = document.getElementsByTagName('button')[0];

	formButton.addEventListener('click', submitVal);

	function submitVal() {
		var messageAlert = [];
		var dataOkValues = ['The next information is going to submit: '];
		if (nameWarning === 1) {
			messageAlert.push('Name: ' + errors[0].innerHTML);
			alertWarning = 1;
		}
		if (lNameWarning === 1) {
			messageAlert.push('Last Name: ' + errors[1].innerHTML);
			alertWarning = 1;
		}
		if (dniWarning === 1) {
			messageAlert.push('DNI: ' + errors[2].innerHTML);
			alertWarning = 1;
		}
		if (ageWarning === 1) {
			messageAlert.push('Age: ' + errors[3].innerHTML);
			alertWarning = 1;
		}
		if (phoneWarning === 1) {
			messageAlert.push('Phone Number: ' + errors[4].innerHTML);
			alertWarning = 1;
		}
		if (addressWarning === 1) {
			messageAlert.push('Address: ' + errors[5].innerHTML);
			alertWarning = 1;
		}
		if (cityWarning === 1) {
			messageAlert.push('City of residence: ' + errors[6].innerHTML);
			alertWarning = 1;
		}
		if (postalWarning === 1) {
			messageAlert.push('Postal Number: ' + errors[7].innerHTML);
			alertWarning = 1;
		}
		if (emailWarning === 1) {
			messageAlert.push('E-mail: ' + errors[8].innerHTML);
			alertWarning = 1;
		}
		if (passwordWarning === 1) {
			messageAlert.push('Password: ' + errors[9].innerHTML);
			alertWarning = 1;
		}
		if (rePasswordWarning === 1) {
			messageAlert.push('Repeat Password: ' + errors[10].innerHTML);
			alertWarning = 1;
		}
		if (alertWarning === 1) {
			alert('Submit failed. Wrong data entry in the category of: \n' + messageAlert.join('\n'));
			alertWarning = 0;
		} else {
			for (var i = 0; i < inputsData.length; i++) {
				dataOkValues.push(inputsData[i].value);
			}
			alert(dataOkValues.join('\n'));
		}
	}
};
