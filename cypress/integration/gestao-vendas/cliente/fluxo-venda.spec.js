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

        cy.get('.mais').eq(1).click();
        cy.get('.mais').eq(1).click();
        cy.get('.mais').eq(1).click();

        cy.get('.menos').eq(1).click();
        cy.get('.menos').eq(1).click();
        cy.get('.menos').eq(1).click();

        cy.get('.mais').eq(1).click();
        cy.get('.mais').eq(1).click();
    }),
    it('RF0035 - Selecionar endereço de entrega', ()=> {
        //login luz@gmail.com abc12345
        if(!sessionStorage.getItem('isLogado')) {
            cy.visit('http://localhost:4200/livraria/login')

            cy.get('.painel_login-container').within(()=> {
                cy.get('#inputEmail')
                    .type('luz@gmail.com')
                    
                cy.get('#inputSenha')
                    .type('abc12345')
            });
    
            cy.get('.painel_login-container-form > button').click();
        }

        cy.get('.liv-header-right_painel-cart').find('mat-icon').click();

        cy.get('#formFieldMyEndereco').click();
        cy.get('mat-option').first().click();


        cy.get('#txtValorPago').type(425.00)
    }),
    it('RF0036 - Selecionar forma de pagamento'),
    it('RF0036 - Selecionar cupom de troca e cancelamento'),
    it('RF0037 - Finalizar compra')
})