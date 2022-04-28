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

	var inputsData = document.getElementsByTagName('input');
	
	// Inicializate global variables

    var nameWarning = 1;
	var emailWarning = 1;
	var alertWarning = 0;

	// Regex declarations

	var mailRegex = /@/;
	var dotComRegex = /.com/;

	// Characters allows

	let num = [0,1,2,3,4,5,6,7,8,9];
	let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];
	let specChar = ['+','-','_','@','*','?','$','^','#','.',];
    
	// Validate name

	inputsData[0].onblur = validateName;
	function validateName() {
		var name = inputsData[0].value;
		var nameL = validateMinimumLenght(name, 4);

		let abcA = false;
		let numA = false;
		let specCharA = false;

		for (let i = 0; i < name.length; i++) {
            for (let j = 0; j < specChar.length; j++){
                if (name[i] == specChar[j]){
                    specCharA = true;
                    break;}
            }
		}
			
		for (let i = 0; i < name.length; i++){  
				if (!numA){
					for (let j = 0; j < num.length; j++){
						if (name[i]==num[j]){
							numA = true;
							break;}  
					} 
				}
				if (!abcA){
					for (let j = 0; j < abc.length; j++){
						if (name[i]==abc[j]){
							abcA = true;
							break;
						}
					}
				}
		}
		if (nameL === 1 && numA == false && abcA == true && specCharA == false ) 
			{
			nameWarning = 0;
			return;
		} else {
			nameWarning = 1;
			return;
		}
	};

	// Validate email

	inputsData[1].onblur = validateEmail;
	function validateEmail() {
		var email = inputsData[1].value;
		var gotDotCom = lookForRegex(email, dotComRegex);
		var gotEmailChar = lookForRegex(email, mailRegex);
		if (gotDotCom === 1 && gotEmailChar === 1) {
			emailWarning = 0;
			return;
		} else {
			emailWarning = 1;
			return;
		}
	};

	// Validate submit

	var formButton = document.getElementsByTagName('button')[1];

	formButton.addEventListener('click', submitVal);

	function submitVal() {
		var messageAlert = [];
		var dataOkValues = ['The next information is going to submit: '];
		if (nameWarning === 1) {
			messageAlert.push('Invalid Name');
			alertWarning = 1;
		}
        if (emailWarning === 1) {
			messageAlert.push('Invalid E-mail');
			alertWarning = 1;
		}
		if (alertWarning === 1) {
			alert('Submit failed. Wrong data entry in the category of: \n' + messageAlert.join('\n'));
			alertWarning = 0;
		} 
		else  {
			for (var i = 0; i < inputsData.length; i++) {
				dataOkValues.push(inputsData[i].value);
			}
			alert('Submit Corret');
			alert(dataOkValues.join('\n'));
		}
	}

};