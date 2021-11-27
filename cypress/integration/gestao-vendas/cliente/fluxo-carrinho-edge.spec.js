describe('Casos de erro - Carrinho', function () {
    const TEMPO = 3000;

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
        cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
        cy.wait(TEMPO)
        cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
        cy.wait(TEMPO)
        cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
        cy.wait(TEMPO)
    })

})
