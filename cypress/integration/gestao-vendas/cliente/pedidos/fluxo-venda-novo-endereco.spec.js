describe('Gestão de Venda - executar venda com novo endereço', function() {
   const TEMPO = 1000;
    it('adiciona um item ao carrinho de compras', function() {
       cy.visit('http://localhost:4200/livraria/carrinho')
       cy.wait(TEMPO)
    
       cy.get('#btnConsultarEstoque').click()
       cy.wait(TEMPO)
    
       cy.get('.estoque-container > .mat-card:nth-child(3) > .estoque-container-card-button > #livroCard > .mat-button-wrapper').click()
       cy.wait(TEMPO)

       cy.get('#addCarrinho').click()
       cy.wait(TEMPO)
    
       if (!sessionStorage.getItem("isLogado")) {
          cy.visit("http://localhost:4200/livraria/login");
          cy.wait(TEMPO)

          cy.get(".painel_login-container").within(() => {
            cy.get("#inputEmail").type("gluz@gmail.com");
            cy.wait(TEMPO)

            cy.get("#inputSenha").type("abc12345");
            cy.wait(TEMPO)
         });
   
         cy.get(".painel_login-container-form > button").click();
         cy.wait(TEMPO)
       }
       
       cy.visit('http://localhost:4200/livraria/carrinho')
       cy.wait(TEMPO)
    })

    it('adicionar novo endereço', ()=> {
      cy.get('#cbNovoEndereco').click()
      cy.wait(TEMPO)

      cy.get('#txtCep').type('08744103')
      cy.wait(TEMPO)

      cy.get('#btnBuscarEndereco').click()
      cy.wait(TEMPO)
    })

    it('adicionar cartao', () => {

    })
})
   