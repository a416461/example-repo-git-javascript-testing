(function() {
	'use strict';
	
	describe('validation.service.js', function() {
		
		describe('isValidEmail() tests', function() {
			it('Checks a valid email testing@vintagesoftware.com to be valid', function() {
		    	expect(validationService.isValidEmail('testing@vintagesoftware.com')).toBe(true);
			});
			
			it('Checks a invalid email testingAtvintagesoftware.com to be invalid', function() {
		    	expect(validationService.isValidEmail('testingAtvintagesoftware.com')).toBe(false);
			});
		});
		
		describe('isValidPostalCode() tests', function() {
			it('Checks a valid postal code 63701 to be valid', function() {
		    	expect(validationService.isValidPostalCode('63701')).toBe(true);
			});
			
			it('Checks a invalid postal code ZK63701 to be invalid', function() {
		    	expect(validationService.isValidPostalCode('ZK63701')).toBe(false);
			});
		});
		
		describe('isValidPhoneNumber() tests', function() {
			it('Checks a valid phone number 888-653-8468 to be valid', function() {
		    	expect(validationService.isValidPhoneNumber('888-653-8468')).toBe(true);
			});
			
			it('Checks a invalid phone number aaa-123-8909 to be invalid', function() {
		    	expect(validationService.isValidPhoneNumber('aaa-123-8909')).toBe(false);
			});
		});
		
		describe('isValidPassword() tests', function() {
			it('Checks a valid password "Password123" to be valid', function() {
		    	expect(validationService.isValidPassword('Password123')).toBe(true);
			});
			
			it('Checks a invalid password "password123" missing a capital letter is invalid', function() {
		    	expect(validationService.isValidPassword('password123')).toBe(false);
			});
			
			it('Checks a invalid password "Password" missing numeric characters is invalid', function() {
		    	expect(validationService.isValidPassword('Password')).toBe(false);
			});

			// Add a test to check that the isValidPassword() correctly checks that the password is at least 8 characters in length.
		});
	});
}());