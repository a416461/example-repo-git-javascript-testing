// func
function isValidPassword(password) {
    var containsDigits = /[0-9]/.test(password);
    var containsUpper = /[A-Z]/.test(password);
    var containsLower = /[a-z]/.test(password);
    var containsAtLeast8Characters = /[a-zA-Z0-9]{8,}/;

    if (containsDigits && containsUpper && containsLower && containsAtLeast8Characters && lenghtshorterthaneight) {
        return true;
    } else {
        return false;
    }

}

// test
it('Checks a invalid password "Pass123" is at least 8 characters in length is invalid', function() {
    expect(validationService.isValidPassword('Pass123')).toBe(false);
});
