describe('CP0: F1 assigment', () => {
	it('should contain "Carreras de F1"', () => {
		cy.visit('http://localhost:3000');

		cy.contains('Carreras de F1');
	});

	it('should display the table when the user selects a year and a stage', () => {
		cy.get('#year-select').select('2020');
		cy.get('#stage-select').select('1');

		cy.get('button[type="submit"]').click();

		cy.get('body').should('include.text', 'Loading...');

		cy.get('table tr:nth-child(2)')
			.should('include.text', 'Valtteri Bottas')
			.and('include.text', 'Mercedes')
			.and('include.text', '1:30:55.739')
			.and('include.text', '25');

		cy.get('table tr:nth-child(6)')
			.should('include.text', 'Carlos Sainz')
			.and('include.text', 'McLaren')
			.and('include.text', '+8.903')
			.and('include.text', '10');

		// Test time replacement
		cy.get('table tr:nth-child(13)').should('include.text', 'Suspension');
		cy.get('table tr:nth-child(14)').should('include.text', 'Electronics');
	});

	it('should display a popup when the user clicks on a row', () => {
		cy.get('.Modal').should('include.text', '');

		cy.get('#year-select').select('2019');
		cy.get('#stage-select').select('3');
		cy.get('button[type="submit"]').click();
		cy.get('body').should('include.text', 'Loading...');

		cy.get('table tr:nth-child(2)').click();

		cy.get('.Modal').should('include.text', 'Lewis Hamilton');
		cy.get('.Modal').should('be.visible');

		cy.get('.Modal').click(); // Click inside the modal
		cy.get('.Modal').should('be.visible');

		cy.get('body').click(100, 100); // Click outside the modal
		cy.get('.Modal').should('not.be.visible');
	});
});
