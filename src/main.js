(function() {
	'use strict';
	
	var validEmail = "testing@vintagesoftware.com",
		invalidEmail = "testingAtvintagesoftware.com",
		validPostalCode = "63701",
		invalidPostalCode = "ZK63701",
		validPhoneNumber = "888-653-8468",
		invalidPhoneNumber = "aaa-123-8909",
		validPassword = "Password123",
		invalidPassword = "password";
		
		
		
		var results = 'Valid Email ' + validEmail + ' ' + validationService.isValidEmail(validEmail) + '<br />' + 
					'Invalid Email ' + invalidEmail + ' ' + validationService.isValidEmail(invalidEmail) + '<br />' + 
					'Valid Postal Code ' + validPostalCode + ' ' + validationService.isValidPostalCode(validPostalCode) + '<br />' + 
					'Invalid Postal Code ' + invalidPostalCode + ' ' + validationService.isValidPostalCode(invalidPostalCode) + '<br />' + 
					'Valid Phone Number ' + validPhoneNumber + ' ' + validationService.isValidPhoneNumber(validPhoneNumber) + '<br />' + 
					'Invalid Phone Number ' + invalidPhoneNumber + ' ' + validationService.isValidPhoneNumber(invalidPhoneNumber) + '<br />' + 
					'Valid Password ' + validPassword + ' ' + validationService.isValidPassword(validPassword) + '<br />' + 
					'Invalid Password ' + invalidPassword + ' ' + validationService.isValidPassword(invalidPassword);
		
		document.getElementById('Results').innerHTML = results;
}());