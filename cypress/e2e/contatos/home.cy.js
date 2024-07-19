/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    it('Deve incluir um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('form > input:first-child').type('Joao')
        cy.get('form > input:nth-child(2)').type('joao@gmail.com')
        cy.get('form > input:nth-child(3)').type('joao@gmail.com')
        cy.get('.adicionar').click()
    })

    it('Deve alterar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/') 
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('form > input:nth-child(3)').clear().type(1999999999)    
    
    })

    it('Deve remover um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/') 
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    
    })

   
})