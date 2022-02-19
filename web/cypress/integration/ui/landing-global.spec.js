/// <reference types="cypress" />

context('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Navigate to class registration', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contain', 'give-classes')    
    });

    it('Navigate to teacher search', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')  
    });
});

    