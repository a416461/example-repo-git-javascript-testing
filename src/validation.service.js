var validationService = (function() {
	'use strict';
	
	var service = {
		isValidEmail: isValidEmail,
		isValidPostalCode: isValidPostalCode,
		isValidPhoneNumber: isValidPhoneNumber,
		isValidPassword: isValidPassword
	}
	return service;
	
	function isValidEmail(email) {
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	
		return regex.test(email);
	}
	
	function isValidPostalCode(postalCode) {
		var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
		
		return regex.test(postalCode);
	}
	
	function isValidPhoneNumber(phoneNumber) {	// Simple US phone number support 
		var regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
		
		return regex.test(phoneNumber);
	}


	
	function isValidPassword(password) {	
		var containsDigits = /[0-9]/.test(password);
		var containsUpper = /[A-Z]/.test(password);
		var containsLower = /[a-z]/.test(password);
		var containsAtLeast8Characters = /[a-zA-Z0-9]{8,}/.test(password);

		if (containsDigits && containsUpper && containsLower && containsAtLeast8Characters) {
			return true;
		} else {
			return false;
		}
	}
}());