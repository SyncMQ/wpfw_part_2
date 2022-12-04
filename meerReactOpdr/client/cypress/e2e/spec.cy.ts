describe('Reserveerings testen', () => {
	beforeEach(() => {
		// reseed Database before each run
		cy.request('http://127.0.0.1:8080/api/reserveering/reseedTest');
		cy.visit('http://127.0.0.1:5173/');
		
	});

	it('Formulier wordt correct ingevoerd.', () => {
		cy.intercept('/api/reserveering/datum').as('amountDatum');
		cy.get('button[aria-label="Choose date"]').click();
		cy.get('.MuiCalendarPicker-root').should('exist');
		cy.get('.MuiPickersDay-today').click();

		cy.wait('@amountDatum').then((interception) => {
			chai.assert.deepEqual(interception.response.body, 5);
		});

		cy.get('p').contains('beschikbaar tickets op deze dag:').as('startAmount');
		
		cy.get('@startAmount').should('contain', '5');
		cy.get('input[name="aantalMensen"').type('1');
		cy.get('input[name="email"').type('a@a.com');

		cy.intercept({
			url: '/api/reserveering',
			method: 'POST'
		}).as('postReq');

		cy.get('button[type="submit"').should('be.enabled').click();
		cy.wait('@postReq').then(() => {			
			cy.get('.MuiAlert-message').should('be.visible').contains('gelukt');
		});
		cy.get('@startAmount').should('contain', '4');
	});

	it('Formulier wordt incorrectcorrect ingevoerd.', () => {
		cy.get('button[aria-label="Choose date"]').click();
		cy.get('.MuiCalendarPicker-root').should('exist');
		cy.get('.MuiPickersDay-today').click();
		cy.get('input[name="aantalMensen"').type('-1');
		cy.get('input[name="email"').type('a@a.com');
		cy.get('button[type="submit"').click();
		cy.get('.MuiAlert-message').should('be.visible').contains('Error');
	});

	it('Go to Contact page', () => {
		cy.get('a').contains('Pretpark NL').click();
		cy.get('h1').should('contain','contact');
	});
});