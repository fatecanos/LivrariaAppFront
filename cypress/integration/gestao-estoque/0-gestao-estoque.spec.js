const { clear } = require("console")

describe('Gestão de estoque', function() {
    const qtde = 5;

    it(`atualizar estoque de ${qtde} produtos`, function() {
      cy.visit('http://localhost:4200/admin/estoque')
      cy.wait(500)

      for(let i = 0; i <= qtde; i++) {
         cy.get('.txtQuantidadeEstoque').eq(i).clear().type(30)
         cy.wait(500)
   
         cy.get('.btnAtualizarEstoque').eq(i).click()
         cy.wait(500)
      }
    })
})
   