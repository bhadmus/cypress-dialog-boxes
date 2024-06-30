Cypress.Commands.add('checkAlert', (value)=>{
    cy.on('window:alert', (text)=>{
        expect(text).to.equal(value)
    })
})

Cypress.Commands.add('checkConfirmBox', (value)=>{
    cy.on('window:confirm', (text)=>{
        expect(text).to.equal(value)
        return true
    })
})

Cypress.Commands.add('cancelConfirmBox', (value)=>{
    cy.on('window:confirm', (text)=>{
        expect(text).to.equal(value)
        return false
    })
})

Cypress.Commands.add('checkPrompt', (element, textInserted)=>{
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(textInserted);
        cy.get(element).should('exist').click();
      });
})