describe('FLUXO DE VENDA', ()=> {
    it('RF0031 - Gerenciar carrinho de compra', ()=> {
        cy.visit('http://localhost:4200/livraria/estoque')
        cy.get('.estoque-container-card')
            .last()
            .find('.estoque-container-card-button')
            .click()
        cy.get('.detalhes-produto-display-valor-button')
            .find('button')
            .click()

        cy.visit('http://localhost:4200/livraria/estoque')
        cy.get('.estoque-container-card')
            .eq(3)
            .find('.estoque-container-card-button')
            .click()
        cy.get('.detalhes-produto-display-valor-button')
            .find('button')
            .click()

        cy.visit('http://localhost:4200/livraria/estoque')
        cy.get('.estoque-container-card')
            .eq(2)
            .find('.estoque-container-card-button')
            .click()
        cy.get('.detalhes-produto-display-valor-button')
            .find('button')
            .click()
        
        cy.get('.carrinho-table-item_line-option').eq(0).find('span').click()
    }),
    it('RF0032 - Definir quantidade de itens no carrinho', ()=> {
        cy.get('.mais').eq(0).click();
        cy.get('.mais').eq(0).click();
        cy.get('.mais').eq(0).click();

        cy.get('.menos').eq(0).click();
        cy.get('.menos').eq(0).click();
        cy.get('.menos').eq(0).click();

        cy.get('.mais').eq(0).click();
        cy.get('.mais').eq(0).click();

        //
        cy.get('.mais').eq(1).click();
        cy.get('.mais').eq(1).click();
        cy.get('.mais').eq(1).click();

        cy.get('.menos').eq(1).click();
        cy.get('.menos').eq(1).click();
        cy.get('.menos').eq(1).click();

        cy.get('.mais').eq(1).click();
        cy.get('.mais').eq(1).click();
    }),
    it('RF0035 - Selecionar endereço de entrega'),
    it('RF0036 - Selecionar forma de pagamento'),
    it('RF0036 - Selecionar cupom de troca e cancelamento'),
    it('RF0037 - Finalizar compra')
})