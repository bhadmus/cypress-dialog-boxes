import '../../src/index'
let data

describe('Suite to showcase cy.compareAliases() command', () => {
    beforeEach(()=>{
        cy.fixture('example').then(exm=>{
            data = exm
        })
        cy.visit('/')
        cy.get('[href="/ingredients/alert"]').should('exist').click()
    })
    it('Test 1 - Window Alert', () => {
        cy.get('#alert-button').should('exist').click()
        cy.checkAlert('Airfryers can make anything!')
    });

    it('Test 2 - Confirm Box', () => {
        cy.checkConfirmBox('Proceed with adding garlic?')
        cy.get('#confirm-button').should('exist').click()
    });

    it('Test 3 - Cancel Confirm Box', () => {
        cy.cancelConfirmBox('Proceed with adding garlic?')
        cy.get('#confirm-button').should('exist').click()
    });

    it('Test 4 - Cancel Promt Box', () => {
        cy.checkPrompt('#prompt-button', 'Cypress')
    });
});