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
 
     it('adicionar novo cartao', () => {
        cy.get('#cbNovoCartaoOption').click()
        cy.wait(TEMPO)

        cy.get('#txtNomeNoCartao').type('Lucas M Nogueira')
        cy.wait(TEMPO)

        cy.get('#txtNumeroNoCartao').type('4834593495860394')
        cy.wait(TEMPO)

        cy.get('#txtCodigoNoCartao').type('456')
        cy.wait(TEMPO)

        cy.get('#selectorBandeira').click()
        cy.wait(TEMPO)
        cy.get('mat-option').eq(0).click()
        cy.wait(TEMPO)

        cy.get('#txtValorPago').clear().type('120')
        cy.wait(TEMPO)

        cy.get('#cbDesejoGravarCartao').click()
        cy.wait(TEMPO)
    })
 })
    