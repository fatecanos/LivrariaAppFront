describe('Casos de erro - Carrinho', function () {
    const TEMPO = 500;

    it('deve adicionar quantidade que excede o estoque', function () {

        cy.visit('http://localhost:4200/')
        cy.wait(TEMPO)
        cy.get('liv-header > .mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-cart > .mat-icon').click()
        cy.wait(TEMPO)
        cy.get('ng-component > .carrinho > .carrinho-content > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(TEMPO)
        cy.get('.estoque > .estoque-container > .mat-card:nth-child(2) > .estoque-container-card-button > #livroCard').click()
        cy.wait(TEMPO)
        cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
        cy.wait(TEMPO)

        for(let i = 0; i < 50; i++) {
            cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()

            if(i === 49) {
                cy.wait(2000)
            }
        }
    }),

    it('deve adicionar quantidade que excede o estoque - com outro produto', function () {

        cy.visit('http://localhost:4200/')
        cy.wait(TEMPO)
        cy.get('liv-header > .mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-cart > .mat-icon').click()
        cy.wait(TEMPO)
        cy.get('ng-component > .carrinho > .carrinho-content > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(TEMPO)
        cy.get('.btnLivroCard').eq(2).click()
        cy.wait(TEMPO)
        cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').eq(0).click()
        cy.wait(TEMPO)

        for(let i = 0; i < 50; i++) {
            cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()

            if(i === 49) {
                cy.wait(2000)
            }
        }
    })

    // it('adicionar endereco', () => {
    //     if (!sessionStorage.getItem("isLogado")) {
    //         cy.visit("http://localhost:4200/livraria/login");
    //         cy.wait(TEMPO)
    
    //         cy.get(".painel_login-container").within(() => {
    //             cy.get("#inputEmail").type("gluz@gmail.com");
    //             cy.wait(TEMPO)

    //             cy.get("#inputSenha").type("abc12345");
    //             cy.wait(TEMPO)
    //         })

    //         cy.get('.painel_login-container-form > button').click();
    //         cy.wait(TEMPO)

    //         cy.visit('http://localhost:4200/livraria/carrinho')
    //         cy.wait(TEMPO)

    //         cy.get('#cbEnderecoPerfil').click()
    //         cy.get('#slcEnderecoPerfil').click()
    //         cy.get('.enderecoPerfilOption').eq(0).click()
    //     }
    // })
})
