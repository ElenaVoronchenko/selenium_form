// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

it('Login', () => {
	cy.visit('https://the-internet.herokuapp.com/login')

	let username = 'tomsmith';
	let password ='SuperSecretPassword!';

	cy.get('input#username').type(username);localStorage
	cy.get('input#password').type(password);
	cy.get('.fa.fa-2x.fa-sign-in').click();
	
	cy.get('div #flash.flash.success').contains('You logged into a secure area!').should('exist');
})

it('Login', () => {
	cy.visit('https://the-internet.herokuapp.com/login')

	let username = 'ttomsmith';
	let password ='SuperSecretPassword!';

	cy.get('input#username').type(username);
	cy.get('input#password').type(password);
	cy.get('.fa.fa-2x.fa-sign-in').click();
	
	cy.get('.flash.error').contains('Your username is invalid!').should('exist');
})

it('Login', () => {
	cy.visit('https://the-internet.herokuapp.com/login')

	let username = 'tomsmith';
	let password ='SuperSecretPassword!';

	cy.get('input#username').type(username);
	cy.get('input#password').type(password);
	cy.get('.fa.fa-2x.fa-sign-in').click();
	
	cy.get('a.button.secondary.radius').click();
	
	cy.get('.flash.success').contains('You logged out of the secure area!').should('exist');
})
