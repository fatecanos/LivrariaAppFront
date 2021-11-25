describe('Solicitaçao de troca', function() {

    it('deve renderizar pagina de login', ()=> {
        cy.visit('http://localhost:4200/livraria/login')
    }),

    it('deve executar login de usuario', ()=> {
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('lucasman@gmail.com')

            cy.get('#inputSenha')
                .type('lucas')
        });

        cy.get('.painel_login-container-form > button').click();
    }),

    it('troca simples', function() {
   
       cy.viewport(1366, 632)
    
       cy.visit('http://localhost:4200/clientes/pedidos')
       cy.wait(2000)
    
       cy.get('tbody > .mat-row:nth-child(1) > .mat-cell > .mat-focus-indicator:nth-child(2) > .mat-button-wrapper').click()
    
       cy.wait(3000)
       cy.get('#txtQtdeTroca')
            .clear()
            .type('123')

       cy.get('#btnSolicitarTroca')
        .click()
    })
})