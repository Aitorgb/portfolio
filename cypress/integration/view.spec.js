// view.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Test', () => {
        cy.get('.navbar-brand').click()

    });

   
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })