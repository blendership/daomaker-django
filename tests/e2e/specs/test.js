// https://docs.cypress.io/api/introduction/api.html

describe('Test', () => {

  it('Should render gallery', () => {

    cy.visit('/');
    cy.get('#app').should('be.visible');
    cy.get('#gallery').should('be.visible');
    cy.get('#gallery').find('img').should('be.visible');

  });

  it('Should navigate', () => {

    cy.visit('/');
    cy.get('#nav').should('be.visible');

    cy.get('#nav > a:nth-child(2)').click();
    cy.get('#shader-container').should('be.visible');

    cy.get('#nav > a