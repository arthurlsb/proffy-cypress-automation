/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" /> 

context('Connections endpoint', () => {
    it('GET - Get total connections made', () => {
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            expect(response.status).eq(200)

            expect(response.duration).lessThan(20)

            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)

            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => { return totalValue >= 5 })

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});