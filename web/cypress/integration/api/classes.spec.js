/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" /> 

context('Classes endpoint', () => {
    it('POST - Register new professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Arthur Lisboa",
                "avatar": "https://www.w3schools.com/howto/img_avatar.png",
                "whatsapp": "954534",
                "bio": "aaaaaaa",
                "subject": "Português",
                "cost": 800,
                "schedule": [{
                    "week_day": 0,
                    "from": "18:23",
                    "to": "19:21"
                }]
            }
        }).then((response) => {
            expect(response.status).eq(201)
        })   
    });
});