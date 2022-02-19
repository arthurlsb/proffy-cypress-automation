/// <reference types="cypress" />


const widths = [1200, 1090]

widths.forEach((width) => {
    context(`Landing Page - ${width}px`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(width, 900)
            cy.log('Largura:', width)
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
})
    