const { clear } = require("console")

describe('Gestão de estoque', function() {

    it('atualizar estoque de 10 produtos', function() {
      cy.visit('http://localhost:4200/admin/estoque')
      cy.wait(1000)

      for(let i = 0; i <= 10; i++) {
         cy.get('.txtQuantidadeEstoque').eq(i).clear().type(30)
         cy.wait(500)
   
         cy.get('.btnAtualizarEstoque').eq(i).click()
         cy.wait(500)
      }
    })
})
   